import { useEffect, useState } from "react";
import { useRouter } from "next/router";
import axios from "../../utils/Axios";
import useClientSecure from "@/hooks/useClientSecure";
import AdminHeader from "@/components/AdminHeader";
import Footer from "@/components/Footer";
import Modal from "@/components/Modal";
import AddPost from "../../components/Addpost";
import AdminPosts from "@/components/AdminPosts";

const Posts = () => {
  const [posts, setPosts] = useState([]);
  const [openModal, setOpenModal] = useState(false);
  const [postId, setPostId] = useState("");
  const [loading, setLoading] = useState(false);
  const [categories, setCategories] = useState([]);

  const router = useRouter();

  const isAuth = useClientSecure();

  const modalHandler = (id) => {
    setOpenModal(!openModal);
    setPostId(id);
  };

  const addPostHandler = (post) => {
    setLoading(true);
    const temp = [...posts];
    axios
      .post("/posts", post)
      .then((responsive) => {
        temp.push(responsive.data);
        setPosts(temp);
        modalHandler();
        setLoading(false);
      })
      .catch((err) => {
        console.log(err);
        setLoading(false);
      });
  };

  const deleteHandler = (postid) => {
    const temp = [...posts];
    axios
      .delete(`/posts/${postid}`)
      .then(() => {
        const newPosts = temp.filter((post) => post._id !== postid);
        setPosts(newPosts);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const updateHandler = (post, postid) => {
    setLoading(true);
    const temp = [...posts];
    axios
      .put(`/posts/${postid}`, post)
      .then((responsive) => {
        const findInex = temp.findIndex((el) => el._id === postid);
        temp[findInex] = responsive.data;
        setPosts(temp);
        modalHandler();
        setLoading(false);
      })
      .catch((err) => {
        console.log(err);
        setLoading(false);
      });
  };

  useEffect(() => {
    if (isAuth !== "loading") {
      isAuth === "authenticated"
        ? axios
            .get("/posts")
            .then((responsive) => {
              setPosts(responsive.data);
            })
            .catch((err) => {
              console.log(err);
            })
        : router.push("/admin/signin");
    }
  }, [isAuth, router]);

  useEffect(() => {
    if (isAuth !== "loading") {
      isAuth === "authenticated"
        ? axios
            .get("/categories")
            .then((responsive) => {
              setCategories(responsive.data);
            })
            .catch((err) => {
              console.log(err);
            })
        : router.push("/admin/signin");
    }
  }, [isAuth, router]);

  const reversePosts = [...posts].reverse();

  return (
    <>
      <AdminHeader />
      <div className="my-10 w-10/12 mx-auto bg-secondary p-10 shadow-sm rounded-sm container">
        {openModal && (
          <Modal modalHandler={modalHandler}>
            <AddPost
              addPostHandler={addPostHandler}
              updateHandler={updateHandler}
              postId={postId}
              reversePosts={reversePosts}
              loading={loading}
              categories={categories}
            />
          </Modal>
        )}
        <div className="flex sm:justify-between sm:flex-nowrap flex-wrap gap-5 justify-center">
          <button
            className="bg-blue-900 text-white px-10 py-2 rounded-sm hover:bg-blue-800 shadow-sm w-full sm:w-36"
            onClick={modalHandler}
          >
            Add
          </button>
          <input
            type="text"
            placeholder="Search..."
            className="px-5 py-2 outline-0 rounded-full shadow-sm focus:ring appearance bg-primary w-full sm:w-56"
          />
        </div>
        <AdminPosts
          deleteHandler={deleteHandler}
          modalHandler={modalHandler}
          reversePosts={reversePosts}
        />
      </div>
      <Footer />
    </>
  );
};

export default Posts;
