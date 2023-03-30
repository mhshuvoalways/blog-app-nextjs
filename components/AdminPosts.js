import moment from "moment/moment";
import parse from "html-react-parser";
import Image from "next/image";
import Edit from "../public/edit.svg";
import Trash from "../public/trash.svg";

const AdminPosts = ({ deleteHandler, modalHandler, reversePosts }) => {
  return (
    <div className="overflow-x-scroll md:overflow-x-auto">
      <table className="w-full text-start mt-5">
        <thead>
          <tr>
            <th className="border border-gray-300 text-start p-2">Image</th>
            <th className="border border-gray-300 text-start p-2">Title</th>
            <th className="border border-gray-300 text-start p-2">
              Description
            </th>
            <th className="border border-gray-300 text-start p-2">Category</th>
            <th className="border border-gray-300 text-start p-2">Date</th>
            <th className="border border-gray-300 text-start p-2">Action</th>
          </tr>
        </thead>
        <tbody>
          {reversePosts.map((post) => (
            <tr key={post._id}>
              <td className="border p-2">
                <Image
                  unoptimized
                  src={post.image.url}
                  alt={post.title}
                  width={300}
                  height={300}
                  placeholder="blue"
                />
              </td>
              <td className="border p-2">{post.title}</td>
              <td className="border p-2">{parse(post.description)}</td>
              <td className="border p-2">{post.category}</td>
              <td className="border p-2">
                {moment(post.createdAt).format("LL")}
              </td>
              <td className="border p-2">
                <div className="flex justify-between">
                  <Image
                    src={Edit}
                    className="cursor-pointer"
                    alt={Edit}
                    onClick={() => modalHandler(post._id)}
                  />
                  <Image
                    src={Trash}
                    className="cursor-pointer"
                    alt={Trash}
                    onClick={() => deleteHandler(post._id)}
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

export default AdminPosts;
