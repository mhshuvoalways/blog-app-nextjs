const Categories = ({ categories, selectHandler, selectCat }) => {
  return (
    <div className="my-10 bg-secondary p-5 shadow-sm rounded-sm">
      <p className="text-xl font-semibold">Categories</p>
      <div className="mt-3">
        {categories?.map((cate) => (
          <p
            className={`${
              cate.name === selectCat
                ? "py-2 cursor-pointer font-bold border-b"
                : "py-2 cursor-pointer hover:font-bold border-b"
            }`}
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
