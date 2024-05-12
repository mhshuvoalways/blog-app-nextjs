import Categories from "@/components/Categories";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import PostCard from "@/components/PostCard";
import Search from "@/components/Search";
import TopPost from "@/components/TopPost";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import axios from "../../utils/Axios";

const Index = () => {
  const [posts, setPosts] = useState([]);
  const [categories, setCategories] = useState([]);

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

  useEffect(() => {
    async function selfcall() {
      const checkQuery = query.category
        ? `/posts/?category=${query.category}`
        : "/posts";
      const posts = await axios.get(checkQuery);
      const categories = await axios.get("/categories");
      setPosts(posts.data);
      setCategories(categories.data);
    }
    selfcall();
  }, [query.category]);

  return (
    <>
      <Header />
      <div className="w-10/12 mx-auto my-10 container">
        <div className="flex justify-between gap-10 sm:flex-nowrap flex-wrap">
          <div className="w-full sm:w-3/12 mx-auto">
            <Search search={query.search} onSearchHanlder={onSearchHanlder} />
            <Categories
              categories={categories}
              selectHandler={selectHandler}
              selectCat={query.category}
            />
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

export default Index;
