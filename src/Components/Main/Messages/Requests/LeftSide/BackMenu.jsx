import { FaArrowLeftLong } from "react-icons/fa6";

const BackMenu = ({ setSelectMenu }) => {
  return (
    <>
      <div className="flex items-center gap-4 text-2xl font-semibold cursor-default select-none">
        <FaArrowLeftLong
          onClick={() => setSelectMenu("Primary")}
          className="cursor-pointer"
        />
        <h1>Messages Requests</h1>
      </div>
    </>
  );
};

export default BackMenu;
