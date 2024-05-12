const Categories = ({ categories, selectHandler, selectCat }) => {
  return (
    <div className="my-10 bg-secondary p-5 shadow-sm rounded-sm">
      <p className="text-xl font-semibold">Categories</p>
      <div className="mt-3">
        {categories?.map((cate, index) => (
          <p
            className={`cursor-pointer py-2 ${
              categories.length !== index + 1 && "border-b"
            } ${cate.name === selectCat ? "font-bold" : "hover:font-bold"}`}
            key={cate._id}
            onClick={() => selectHandler(cate.name)}
          >
            {cate.name}
          </p>
        ))}
      </div>
    </div>
  );
};

export default Categories;
