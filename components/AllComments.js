import moment from "moment";

const AllComments = ({ comments }) => {
  const reverseComments = [...comments].reverse();
  return (
    <div className="bg-secondary p-10 shadow-sm rounded-sm space-y-5">
      {reverseComments.map((comment) => (
        <div className="space-y-2 border-t pt-2" key={comment._id}>
          <p className="text-xl">{comment.name}</p>
          <p className="opacity-80">{comment.comment}</p>
          <p className="text-gray-400 text-sm">
            {moment(comments.createdAt).format("LL")}
          </p>
        </div>
      ))}
    </div>
  );
};

export default AllComments;
