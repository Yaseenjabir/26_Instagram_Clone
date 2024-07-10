import { VscReactions } from "react-icons/vsc";

const AddComment = () => {
  return (
    <>
      <div className="flex justify-between items-center">
        <textarea
          type="text"
          placeholder="Add a comment..."
          className="w-full outline-none text-sm h-[25px]"
          style={{ resize: "none" }}
        ></textarea>
        <VscReactions className="cursor-pointer text-lg text-gray-600" />
      </div>
    </>
  );
};

export default AddComment;
