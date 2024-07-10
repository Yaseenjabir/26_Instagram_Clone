import { LuDot } from "react-icons/lu";
import SingleRequest from "./SingleRequest";
import { data } from "./assets/assets";
import { IoIosArrowForward } from "react-icons/io";
import { FaEyeSlash } from "react-icons/fa6";
const RequestsInbox = () => {
  return (
    <div className="mt-5 flex flex-col gap-5 min-h-[300px] overflow-y-scroll">
      {data.map((item, index) => (
        <SingleRequest key={index} data={item} />
      ))}
      <div className="flex relative cursor-pointer select-none">
        <div className=" flex-shrink-0 w-[60px] h-[60px] p-4 bg-gray-100 rounded-full">
          <FaEyeSlash className="w-full h-full" />
        </div>
        <div className=" flex flex-col justify-center px-2 text-[14px] flex-1 font-semibold">
          <h1>Hidden Requests</h1>
        </div>
        <IoIosArrowForward className="absolute top-5 right-2  text-2xl" />
      </div>
    </div>
  );
};

export default RequestsInbox;
