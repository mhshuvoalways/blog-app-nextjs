import { useState } from "react";
import axios from "../utils/Axios";

const Comment = ({ addCommentHandler, postId }) => {
  const [credentials, setCredentials] = useState({
    name: "",
    email: "",
    comment: "",
  });

  const onChangeHandler = (event) => {
    setCredentials({
      ...credentials,
      [event.target.name]: event.target.value,
    });
  };

  const onSubmit = (e) => {
    e.preventDefault();
    const commentObj = {
      name: credentials.name,
      email: credentials.email,
      comment: credentials.comment,
      postId: postId,
    };
    axios
      .post("/comment", commentObj)
      .then((responsive) => {
        addCommentHandler(responsive.data);
        setCredentials({
          name: "",
          email: "",
          comment: "",
        });
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <form
      onSubmit={onSubmit}
      className="bg-secondary p-10 shadow-sm rounded-sm space-y-5 mt-10 sm:mt-20"
    >
      <p className="text-xl font-semibold">Leave a comment on this post</p>
      <div className="flex gap-5 flex-wrap">
        <div>
          <label>Name*</label>
          <input
            type="text"
            placeholder="Enter your name"
            className="px-5 py-4 outline-0 rounded shadow-sm w-full focus:ring appearance bg-primary"
            name="name"
            onChange={onChangeHandler}
            value={credentials.name}
          />
        </div>
        <div>
          <label>Email*</label>
          <input
            type="email"
            placeholder="Enter your email"
            className="px-5 py-4 outline-0 rounded shadow-sm w-full focus:ring appearance bg-primary"
            name="email"
            onChange={onChangeHandler}
            value={credentials.email}
          />
        </div>
      </div>
      <div>
        <label>Comment*</label>
        <textarea
          placeholder="Enter your comment"
          className="px-5 py-4 outline-0 rounded shadow-sm w-full focus:ring appearance bg-primary h-48"
          name="comment"
          onChange={onChangeHandler}
          value={credentials.comment}
        />
      </div>
      <button className="bg-blue-900 text-white px-5 py-2 rounded-sm hover:bg-blue-800 shadow-sm">
        Submit your comment
      </button>
    </form>
  );
};

export default Comment;
