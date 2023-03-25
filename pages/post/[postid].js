import Footer from "@/components/Footer";
import Header from "@/components/Header";
import Post from "@/components/Post";
import TopPost from "@/components/TopPost";
import axios from "../../utils/Axios";

const PostDetails = ({ post, posts }) => {
  return (
    <>
      <Header />
      <div className="w-10/12 mx-auto my-10">
        <div className="flex justify-between gap-10 sm:flex-nowrap flex-wrap">
          <div className="w-full sm:w-3/12">
            <TopPost posts={posts} />
          </div>
          <div className="w-full sm:w-9/12">
            <Post post={post} />
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export async function getStaticPaths() {
  const posts = await axios.get("/posts");
  const paths = posts.data.map((el) => {
    return {
      params: {
        postid: el._id,
      },
    };
  });

  return {
    paths,
    fallback: false,
  };
}

export async function getStaticProps(context) {
  const { params } = context;
  const posts = await axios.get(`/posts`);
  const post = await axios.get(`/posts/${params.postid}`);
  return {
    props: {
      post: post.data,
      posts: posts.data,
    },
  };
}

export default PostDetails;
