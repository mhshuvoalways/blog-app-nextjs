import moment from "moment/moment";
import Image from "next/image";
import Edit from "../public/edit.svg";
import Trash from "../public/trash.svg";

const AdminCategories = ({
  deleteHandler,
  modalHandler,
  reverseCategories,
}) => {
  return (
    <div className="overflow-x-scroll md:overflow-x-auto">
      <table className="w-full text-start mt-5">
        <thead>
          <tr>
            <th className="border border-gray-300 text-start p-2">Name</th>
            <th className="border border-gray-300 text-start p-2">Date</th>
            <th className="border border-gray-300 text-start p-2">Action</th>
          </tr>
        </thead>
        <tbody>
          {reverseCategories.map((cate) => (
            <tr key={cate._id}>
              <td className="border p-2">{cate.name}</td>
              <td className="border p-2">
                {moment(cate.createdAt).format("LL")}
              </td>
              <td className="border p-2">
                <div className="flex justify-between">
                  <Image
                    src={Edit}
                    className="cursor-pointer"
                    alt={Edit}
                    onClick={() => modalHandler(cate._id)}
                  />
                  <Image
                    src={Trash}
                    className="cursor-pointer"
                    alt={Trash}
                    onClick={() => deleteHandler(cate._id)}
                  />
                </div>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default AdminCategories;
