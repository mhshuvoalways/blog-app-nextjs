import { useEffect, useState } from "react";
import { useRouter } from "next/router";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import Post from "@/components/Post";
import TopPost from "@/components/TopPost";
import CommentAdd from "@/components/CommentAdd";
import AllComments from "@/components/AllComments";
import axios from "axios";

const PostDetails = ({ post, posts }) => {
  const [comments, setComments] = useState([]);
  const router = useRouter();

  useEffect(() => {
    axios
      .get(`https://daringpage.vercel.app/api/comment/${router.query.postid}`)
      .then((res) => {
        setComments(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, [router.query.postid]);

  const addCommentHandler = (comment) => {
    const temp = [...comments];
    temp.push(comment);
    setComments(temp);
  };

  return (
    <>
      <Header />
      <div className="w-10/12 mx-auto my-10 container">
        <div className="flex justify-between gap-10 sm:flex-nowrap flex-wrap">
          <div className="w-full sm:w-3/12">
            <TopPost posts={posts} />
          </div>
          <div className="w-full sm:w-9/12">
            <Post post={post} />
            <CommentAdd
              addCommentHandler={addCommentHandler}
              postId={router.query.postid}
            />
            <AllComments comments={comments} />
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export async function getStaticPaths() {
  const posts = await axios.get("https://daringpage.vercel.app/api/posts");
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
  const posts = await axios.get(`https://daringpage.vercel.app/api/posts`);
  const post = await axios.get(`https://daringpage.vercel.app/api/posts/${params.postid}`);
  return {
    props: {
      post: post.data,
      posts: posts.data,
    },
  };
}

export default PostDetails;
