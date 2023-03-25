import { useEffect, useState } from "react";
import { useRouter } from "next/router";
import axios from "axios";
import useClientSecure from "@/hooks/useClientSecure";
import AdminHeader from "@/components/AdminHeader";
import Footer from "@/components/Footer";
import Modal from "@/components/Modal";
import AddCategory from "../../components/AddCategory";
import AdminCategories from "@/components/AdminCategories";

const Categories = () => {
  const [categories, setCategories] = useState([]);
  const [openModal, setOpenModal] = useState(false);
  const [categoryId, setCategoryId] = useState("");
  const [loading, setLoading] = useState(false);

  const router = useRouter();
  const isAuth = useClientSecure();

  const modalHandler = (id) => {
    setOpenModal(!openModal);
    setCategoryId(id);
  };

  const addCateHandler = (cate) => {
    setLoading(true);
    const temp = [...categories];
    axios
      .post("/api/categories", { name: cate.category })
      .then((responsive) => {
        temp.push(responsive.data);
        setCategories(temp);
        modalHandler();
        setLoading(false);
      })
      .catch((err) => {
        console.log(err);
        setLoading(false);
      });
  };

  const deleteHandler = (cateId) => {
    const temp = [...categories];
    axios
      .delete(`/api/categories/${cateId}`)
      .then(() => {
        const newCate = temp.filter((cat) => cat._id !== cateId);
        setCategories(newCate);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const updateHandler = (cate, cateId) => {
    setLoading(true);
    const temp = [...categories];
    axios
      .put(`/api/categories/${cateId}`, { name: cate.category })
      .then((responsive) => {
        const findInex = temp.findIndex((el) => el._id === cateId);
        temp[findInex] = responsive.data;
        setCategories(temp);
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
            .get("/api/categories")
            .then((responsive) => {
              setCategories(responsive.data);
            })
            .catch((err) => {
              console.log(err);
            })
        : router.push("/admin/signin");
    }
  }, [isAuth, router]);

  const reverseCategories = [...categories].reverse();

  return (
    <>
      <AdminHeader />
      <div className="my-10 w-10/12 mx-auto bg-secondary p-10 shadow-sm rounded-sm">
        {openModal && (
          <Modal modalHandler={modalHandler}>
            <AddCategory
              addCateHandler={addCateHandler}
              updateHandler={updateHandler}
              categoryId={categoryId}
              reverseCategories={reverseCategories}
              loading={loading}
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
        <AdminCategories
          deleteHandler={deleteHandler}
          modalHandler={modalHandler}
          reverseCategories={reverseCategories}
        />
      </div>
      <Footer />
    </>
  );
};

export default Categories;
