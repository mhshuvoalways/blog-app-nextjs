import Image from "next/image";
import moment from "moment";
import Post1 from "../public/posts/post(5).jpg";

const Post = ({ post }) => {
  return (
    <div className="bg-secondary rounded-sm shadow-sm p-5 sm:p-10">
      <Image
        unoptimized
        src={post.image.url}
        alt={Post1}
        className="rounded-sm mx-auto w-full"
        width={500}
        height={500}
      />
      <div className="mt-5">
        <p className="text-gray-400 text-sm uppercase">
          {post.category} - {moment(post.createdAt).format("LL")}
        </p>
        <p className="mt-3 text-xl">{post.title}</p>
        <p className="text-gray-400 mt-2">{post.descriptiton}</p>
      </div>
    </div>
  );
};

export default Post;
