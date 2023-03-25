import Image from "next/image";
import Link from "next/link";
import moment from "moment";

const PostCard = ({ posts }) => {
  return (
    <div className="flex gap-10 justify-center sm:justify-between flex-wrap">
      {posts.map((post) => (
        <div
          className="bg-secondary w-full sm:w-96 rounded-sm shadow-sm"
          key={post._id}
        >
          <Image
            unoptimized
            src={post.image.url}
            alt={post.title}
            className="rounded-t-sm"
            width={500}
            height={500}
          />
          <div className="p-5 space-y-2">
            <p className="text-gray-400 text-sm uppercase">
              {post.category} - {moment(post.createdAt).format("LL")}
            </p>
            <div className="space-y-1">
              <Link
                href="/post/postid"
                className="hover:underline cursor-pointer"
              >
                {post.title}
              </Link>
              <p className="text-gray-400">{post.description}</p>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default PostCard;
