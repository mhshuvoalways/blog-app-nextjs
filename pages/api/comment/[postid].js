import nc from "next-connect";
import dbConnect from "@/config/dbConnect";
import Comment from "@/models/Comment";
import serverError from "@/utils/serverError";

const handler = nc({
  onError: (err, req, res, next) => {
    serverError(res);
  },
  onNoMatch: (req, res) => {
    res.status(404).end("Page is not found");
  },
});

handler.get((req, res) => {
  dbConnect(res);
  const postId = req.query.postid;
  Comment.find({ postId: postId })
    .then((responsive) => {
      res.status(200).json(responsive);
    })
    .catch(() => {
      serverError(res);
    });
});

export default handler;
