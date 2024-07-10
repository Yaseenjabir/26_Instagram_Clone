import { HiOutlineDotsHorizontal } from "react-icons/hi";
import { LuDot } from "react-icons/lu";

const Username = ({ profile, name, ago }) => {
  return (
    <>
      <div className="flex items-center justify-between">
        <div className="flex items-center">
          <img className="w-[27px] h-[27px] rounded-full mr-1" src={profile} />
          <p className="text-[13px] font-semibold text-gray-800">{name}</p>
          <LuDot className="text-gray-600 w-3 h-3" />
          <p className="text-gray-600 text-[12px]">{ago}</p>
        </div>
        <div>
          <div className="flex items-center cursor-pointer">
            <HiOutlineDotsHorizontal />
          </div>
        </div>
      </div>
    </>
  );
};

export default Username;
