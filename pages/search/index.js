import { useState, useEffect } from "react";
import { useRouter } from "next/router";
import axios from "../../utils/Axios";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Categories from "@/components/Categories";
import PostCard from "@/components/PostCard";
import Search from "@/components/Search";
import TopPost from "@/components/TopPost";

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
    if (category && search) {
      router.push(`/search/?category=${category}&search=${search}`, undefined, {
        shallow: false,
      });
    } else if (category) {
      router.push(`/search/?category=${category}`, undefined, {
        shallow: false,
      });
    } else if (search) {
      router.push(`/search/?search=${search}`, undefined, {
        shallow: false,
      });
    } else {
      router.push(`/`, undefined, {
        shallow: false,
      });
    }
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
      <div className="w-10/12 mx-auto my-10">
        <div className="flex justify-between gap-10 sm:flex-nowrap flex-wrap">
          <div className="w-full sm:w-3/12 mx-auto">
            <Search search={query.search} onSearchHanlder={onSearchHanlder} />
            <Categories
              categories={categories}
              selectHandler={selectHandler}
              selectCat={query.category}
            />
            <TopPost posts={posts} />
          </div>
          <div className="w-full sm:w-9/12 mx-auto">
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

export async function getServerSideProps({ query }) {
  const checkQuery = query.category
    ? `/posts/?category=${query.category}`
    : "/posts";
  const posts = await axios.get(checkQuery);
  const categories = await axios.get("/categories");
  return {
    props: {
      posts: posts.data,
      categories: categories.data,
    },
  };
}

export default Index;
