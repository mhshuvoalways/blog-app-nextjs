import nc from "next-connect";
import Comment from "@/models/Comment";
import serverError from "@/utils/serverError";
import commentValidation from "@/validations/commentValidation";

const handler = nc({
  onError: (err, req, res, next) => {
    serverError(res);
  },
  onNoMatch: (req, res) => {
    res.status(404).end("Page is not found");
  },
});

handler.post(async (req, res) => {
  const { name, email, comment, postId } = req.body;
  const validation = commentValidation({ name, email, comment, postId });
  if (validation.isValid) {
    new Comment({ name, email, comment, postId })
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
});

export default handler;
