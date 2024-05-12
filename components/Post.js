import parse from "html-react-parser";
import moment from "moment";
import Image from "next/image";
import Post1 from "../public/posts/post(5).jpg";

const Post = ({ post }) => {
  return (
    <div className="bg-secondary rounded-sm shadow-sm p-5 sm:p-10">
      <div className="flex gap-5 items-end">
        <Image
          unoptimized
          src={post.image.url}
          alt={Post1}
          className="rounded-sm mx-auto w-4/12 h-56 object-cover"
          width={500}
          height={500}
        />
        <p className="text-xl w-8/12">{post.title}</p>
      </div>
      <div className="mt-5">
        <p className="text-gray-400 text-sm uppercase">
          {post.category} - {moment(post.createdAt).format("LL")}
        </p>

        <div className="text-gray-400 mt-3">{parse(post.description)}</div>
      </div>
    </div>
  );
};

export default Post;
