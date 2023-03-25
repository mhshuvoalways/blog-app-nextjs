import axios from "../utils/Axios";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Categories from "@/components/Categories";
import PostCard from "@/components/PostCard";
import Search from "@/components/Search";
import TopPost from "@/components/TopPost";

const index = ({ posts, categories }) => {
  return (
    <>
      <Header />
      <div className="w-10/12 mx-auto my-10">
        <div className="flex justify-between gap-10 sm:flex-nowrap flex-wrap">
          <div className="w-full sm:w-3/12 mx-auto">
            <Search />
            <Categories categories={categories} />
            <TopPost posts={posts} />
          </div>
          <div className="w-full sm:w-9/12 mx-auto">
            <PostCard posts={posts} />
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export async function getStaticProps() {
  const posts = await axios.get("/posts");
  const categories = await axios.get("/categories");

  return {
    props: {
      posts: posts.data,
      categories: categories.data,
    },
  };
}

export default index;
