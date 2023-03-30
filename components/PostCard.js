import Image from "next/image";
import parse from "html-react-parser";
import Link from "next/link";
import moment from "moment";

const PostCard = ({ posts, search }) => {
  const reversePosts = search
    ? [...posts]
        .reverse()
        .filter((el) => el.title.toLowerCase().includes(search.toLowerCase()))
    : [...posts].reverse();

  return (
    <div className="flex gap-10 justify-center sm:justify-between flex-wrap">
      {reversePosts.map((post) => {
        return (
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
              <div className="space-y-2">
                <Link
                  href={`/post/${post._id}`}
                  className="hover:underline cursor-pointer text-xl"
                >
                  {post.title.length > 60
                    ? post.title.slice(0, 60) + "..."
                    : post.title}
                </Link>
                <div>
                  {post.description.length > 150
                    ? parse(post.description.slice(0, 150) + "...")
                    : parse(post.description)}
                </div>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default PostCard;
