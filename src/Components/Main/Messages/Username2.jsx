import { IoIosArrowDown } from "react-icons/io";
import { PiNotePencilBold } from "react-icons/pi";

const Username2 = () => {
  return (
    <div className="flex justify-between px-6 select-none text-gray-800">
      <div className="flex items-center gap-1">
        <h1 className="font-bold text-lg">ezgod791</h1>
        <IoIosArrowDown className="mt-1 cursor-pointer" />
      </div>
      <PiNotePencilBold className="text-2xl cursor-pointer" />
    </div>
  );
};

export default Username2;
