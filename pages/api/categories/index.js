import nc from "next-connect";
import { getSession } from "next-auth/react";
import dbConnect from "@/config/dbConnect";
import Categories from "@/models/Categories";
import serverError from "@/utils/serverError";
import categoryValidation from "@/validations/categoryValidation";

const handler = nc({
  onError: (err, req, res, next) => {
    serverError(res);
  },
  onNoMatch: (req, res) => {
    res.status(404).end("Page is not found");
  },
});

handler.post(async (req, res) => {
  const session = await getSession({ req });
  if (session.user.role === "admin") {
    const { name } = req.body;
    const validation = categoryValidation(name);
    if (validation.isValid) {
      new Categories({ name })
        .save()
        .then((responsive) => {
          res.status(200).json(responsive);
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
  Categories.find()
    .then((responsive) => {
      res.status(200).json(responsive);
    })
    .catch(() => {
      serverError(res);
    });
});

export default handler;
