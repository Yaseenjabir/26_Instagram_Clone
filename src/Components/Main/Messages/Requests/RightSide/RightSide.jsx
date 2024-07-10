import { IoMdPersonAdd } from "react-icons/io";

const RightSide = () => {
  return (
    <div className="flex flex-col items-center cursor-default">
      <div className="border-[3px] border-black rounded-full p-4 w-min">
        <IoMdPersonAdd className="text-[70px]" />
      </div>
      <h1 className="text-lg font-semibold text-gray-800 mt-3">
        Message Requests
      </h1>
      <p className="text-gray-600">
        Send private messages and photos to a friend or groups
      </p>
    </div>
  );
};

export default RightSide;
