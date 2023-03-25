import nc from "next-connect";
import { getSession } from "next-auth/react";
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

handler.delete(async (req, res) => {
  const session = await getSession({ req });
  if (session.user.role === "admin") {
    const { postid } = req.query;
    Posts.findOneAndDelete({ _id: postid })
      .then((responsive) => {
        cloudinary.v2.uploader.destroy(responsive.image.publicId);
        res.status(200).json(responsive);
      })
      .catch(() => {
        serverError(res);
      });
  } else {
    res.status(401).json("You are not admin!");
  }
});

handler.use(fileUpload.single("image"));

handler.put(async (req, res) => {
  const session = await getSession({ req });
  if (session.user.role === "admin") {
    cloudinaryConfig();

    const { title, description, category, imageUrl } = req.body;
    const { postid } = req.query;
    const validation = postsValidation({
      title,
      description,
      category,
      image: req.file || imageUrl,
    });
    if (validation.isValid) {
      Posts.findOne({ _id: postid })
        .then((findRes) => {
          if (req.file) {
            cloudinary.v2.uploader.destroy(findRes.image.publicId);
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
                Posts.findOneAndUpdate({ _id: postid }, postObj, {
                  new: true,
                })
                  .then((response) => {
                    res.status(200).json(response);
                  })
                  .catch(() => {
                    serverError(res);
                  });
              })
              .catch(() => {
                serverError(res);
              });
          } else {
            const updatePost = {
              title,
              description,
              category,
            };
            Posts.findOneAndUpdate({ _id: postid }, updatePost, { new: true })
              .then((response) => {
                res.status(200).json(response);
              })
              .catch(() => {
                serverError(res);
              });
          }
        })
        .catch(() => {
          serverError(res);
        });
    } else {
      res.status(400).json(validation.error);
    }
  }
});

export default handler;

export const config = {
  api: {
    bodyParser: false,
  },
};
