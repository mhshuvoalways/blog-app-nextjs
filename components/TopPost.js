import moment from "moment";

const TopPost = ({ posts }) => {
  return (
    <div className="bg-secondary p-5 shadow-sm rounded-sm">
      <p className="text-xl font-semibold">Top Posts</p>
      <div className="mt-3 space-y-3">
        {posts?.map((post, index) => (
          <div key={post._id}>
            <div className="flex gap-5">
              <p className="text-2xl font-extrabold">{index + 1}</p>
              <div>
                <p className="cursor-pointer hover:underline">{post.title}</p>
                <p className="text-gray-400 text-sm mt-2 uppercase">
                  {post.category} - {moment(post.createdAt).format("LL")}
                </p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default TopPost;
