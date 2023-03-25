import Header from "@/components/Header";
import Footer from "@/components/Footer";
import TopPost from "@/components/TopPost";
import Post from "@/components/Post";

const PostDetails = () => {
  return (
    <>
      <Header />
      <div className="w-10/12 mx-auto my-10">
        <div className="flex justify-between gap-10 sm:flex-nowrap flex-wrap">
          <div className="w-full sm:w-3/12">
            <TopPost />
          </div>
          <div className="w-full sm:w-9/12">
            <Post />
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default PostDetails;
