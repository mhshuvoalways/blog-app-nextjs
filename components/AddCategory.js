import { useEffect, useState } from "react";

const AddCategoy = ({
  addCateHandler,
  updateHandler,
  categoryId,
  reverseCategories,
  loading,
}) => {
  const [category, setCategory] = useState("");

  const changeHandler = (event) => {
    setCategory(event.target.value);
  };

  const onSubmitHandler = (e) => {
    e.preventDefault();
    if (typeof categoryId === "string") {
      updateHandler({ category }, categoryId);
    } else {
      addCateHandler({ category });
    }
  };

  useEffect(() => {
    const findCate = reverseCategories.find((catid) => catid._id === categoryId);
    if (findCate) {
      setCategory(findCate.name);
    }
  }, [categoryId, reverseCategories]);

  return (
    <form className="space-y-5" onSubmit={onSubmitHandler}>
      <p className="text-xl font-semibold">
        {typeof categoryId === "string" ? "Update Category" : "Add Category"}
      </p>
      <div>
        <label>Name</label>
        <input
          type="text"
          placeholder="Enter title"
          className="px-5 py-4 outline-0 rounded shadow-sm w-full focus:ring appearance bg-primary"
          value={category}
          onChange={changeHandler}
        />
      </div>
      <div className="pt-10">
        <button
          className={
            loading
              ? "bg-blue-900 text-white px-5 py-2 rounded-sm hover:bg-blue-800 shadow-sm w-full opacity-50 cursor-not-allowed"
              : "bg-blue-900 text-white px-5 py-2 rounded-sm hover:bg-blue-800 shadow-sm w-full"
          }
        >
          {typeof categoryId === "string" ? "Update" : "Add"}
        </button>
      </div>
    </form>
  );
};

export default AddCategoy;
