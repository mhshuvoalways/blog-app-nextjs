const Categories = ({ categories }) => {
  return (
    <div className="my-10 bg-secondary p-5 shadow-sm rounded-sm">
      <p className="text-xl font-semibold">Categories</p>
      <div className="mt-3">
        {categories?.map((cate) => (
          <p
            className="py-2 cursor-pointer hover:font-bold border-b"
            key={cate._id}
          >
            {cate.name}
          </p>
        ))}
      </div>
    </div>
  );
};

export default Categories;
