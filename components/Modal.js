const Modal = ({ children, modalHandler }) => {
  return (
    <div>
      <div className="fixed w-full lg:w-6/12 container mx-auto inset-0 z-50 flex justify-center items-center">
        <div className="bg-white shadow-lg rounded-lg max-h-[90vh] relative overflow-y-auto">
          <p
            onClick={modalHandler}
            className="cursor-pointer text-end p-5 font-bold text-lg absolute right-0"
          >
            ✕
          </p>
          <div className="px-5 md:px-10 my-10">{children}</div>
        </div>
      </div>
      <p className="fixed inset-0 bg-gray-700 opacity-50 z-40"></p>
    </div>
  );
};

export default Modal;
