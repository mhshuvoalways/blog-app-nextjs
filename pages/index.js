import Categories from "@/components/Categories";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import PostCard from "@/components/PostCard";
import Search from "@/components/Search";
import TopPost from "@/components/TopPost";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import axios from "../utils/Axios";

const Index = ({ posts, categories }) => {
  const [query, setQuery] = useState({
    category: "",
    search: "",
  });
  const router = useRouter();

  const selectHandler = (value) => {
    if (query.category !== value) {
      setQuery({
        ...query,
        category: value,
      });
      routerPush(value, query.search);
    } else {
      setQuery({
        ...query,
        category: "",
      });
      routerPush("", query.search);
    }
  };

  const onSearchHanlder = (value) => {
    if (value) {
      setQuery({
        ...query,
        search: value,
      });
      routerPush(query.category, value);
    } else {
      setQuery({
        ...query,
        search: "",
      });
      routerPush(query.category, "");
    }
  };

  const routerPush = (category, search) => {
    let url = "/";
    if (category && search) {
      url = `/filter/?category=${category}&search=${search}`;
    } else if (category) {
      url = `/filter/?category=${category}`;
    } else if (search) {
      url = `/filter/?search=${search}`;
    }
    router.push(url, undefined, { shallow: false });
  };

  useEffect(() => {
    setQuery({
      category: router.query.category || "",
      search: router.query.search || "",
    });
  }, [router.query.category, router.query.search]);

  return (
    <>
      <Header />
      <div className="w-10/12 mx-auto my-10 container">
        <div className="flex justify-between gap-10 md:flex-nowrap flex-wrap">
          <div className="w-full md:w-3/12 mx-auto">
            <Search search={query.search} onSearchHanlder={onSearchHanlder} />
            <Categories
              categories={categories}
              selectHandler={selectHandler}
              selectCat={query.category}
            />
            <TopPost posts={posts} />
          </div>
          <div className="w-full md:w-9/12 mx-auto">
            <PostCard
              posts={posts}
              selectCat={query.category}
              search={query.search}
            />
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
console.log(posts);
  return {
    props: {
      posts: posts.data,
      categories: categories.data,
    },
  };
}

export default Index;
