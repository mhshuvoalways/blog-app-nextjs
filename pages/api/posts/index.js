import nc from "next-connect";
import { getSession } from "next-auth/react";
import dbConnect from "@/config/dbConnect";
import Posts from "@/models/Posts";
import serverError from "@/utils/serverError";
import postsValidation from "@/validations/postsValidation";
import fileUpload from "@/middlewares/fileUpload";
import cloudinaryConfig from "@/config/cloudinary";
import cloudinary from "cloudinary";

const handler = nc({
  onError: (err, req, res, next) => {
    serverError(res);
  },
  onNoMatch: (req, res) => {
    res.status(404).end("Page is not found");
  },
});

handler.use(fileUpload.single("image"));

handler.post(async (req, res) => {
  const session = await getSession({ req });
  if (session.user.role === "admin") {
    cloudinaryConfig();
    const { title, description, category } = req.body;
    const validation = postsValidation({
      title,
      description,
      category,
      image: req.file,
    });
    if (validation.isValid) {
      cloudinary.v2.uploader
        .upload(req.file.path, {
          public_id: "blog-app/posts/" + req.file.filename,
        })
        .then((result) => {
          const postObj = {
            title,
            description,
            category,
            image: {
              url: result.url,
              publicId: result.public_id,
            },
          };
          new Posts(postObj)
            .save()
            .then((responsive) => {
              res.status(200).json(responsive);
            })
            .catch(() => {
              serverError(res);
            });
        })
        .catch(() => {
          serverError(res);
        });
    } else {
      res.status(400).json(validation.error);
    }
  } else {
    res.status(401).json("You are not admin!");
  }
});

handler.get((req, res) => {
  dbConnect(res);
  Posts.find()
    .then((responsive) => {
      res.status(200).json(responsive);
    })
    .catch(() => {
      serverError(res);
    });
});

export default handler;

export const config = {
  api: {
    bodyParser: false,
  },
};
