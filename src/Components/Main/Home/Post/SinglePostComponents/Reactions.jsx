import { FaRegBookmark, FaRegComment, FaRegHeart } from "react-icons/fa";

const Reactions = () => {
  return (
    <>
      <div className="flex items-center justify-between text-gray-800">
        <div className="flex gap-3 text-xl">
          <FaRegHeart className="cursor-pointer" />
          <FaRegComment className=" cursor-pointer" />
        </div>
        <FaRegBookmark className="text-xl cursor-pointer" />
      </div>
    </>
  );
};

export default Reactions;
