import Link from "next/link";
import moment from "moment";

const TopPost = ({ posts }) => {
  const reversePosts = [...posts].reverse().slice(0, 5);

  return (
    <div className="bg-secondary p-5 shadow-sm rounded-sm">
      <p className="text-xl font-semibold">Top Posts</p>
      <div className="mt-3 space-y-3">
        {reversePosts?.map((post, index) => (
          <div key={post._id}>
            <div className="flex gap-5">
              <p className="text-2xl font-extrabold">{index + 1}</p>
              <div>
                <Link href={`/post/${post._id}`} className="hover:underline line-clamp-2">
                  {post.title}
                </Link>
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
