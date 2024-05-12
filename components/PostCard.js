import parse from "html-react-parser";
import moment from "moment";
import Image from "next/image";
import Link from "next/link";

const PostCard = ({ posts, search }) => {
  const reversePosts = search
    ? [...posts]
        .reverse()
        .filter((el) => el.title.toLowerCase().includes(search.toLowerCase()))
    : [...posts].reverse();

  return (
    <div className="gap-5 grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3">
      {reversePosts.map((post) => {
        return (
          <div
            className="bg-secondary w-full rounded-sm shadow-sm"
            key={post._id}
          >
            <Image
              unoptimized
              src={post.image.url}
              alt={post.title}
              className="rounded-t-sm object-cover h-60"
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
                  className="hover:underline cursor-pointer text-xl line-clamp-1"
                
                >
                  {post.title.length > 60
                    ? post.title.slice(0, 60) + "..."
                    : post.title}
                </Link>
                <div className="line-clamp-2">
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
