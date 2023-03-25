const Modal = ({ children, modalHandler }) => {
  return (
    <div className="fixed inset-0 w-10/12 sm:w-6/12 m-auto h-4/6 overflow-y-scroll shadow-md rounded-md modal">
      <div className="bg-secondary p-10">{children}</div>
      <div
        className="bg-black fixed inset-0 -z-10 opacity-50"
        onClick={modalHandler}
      ></div>
    </div>
  );
};

export default Modal;
