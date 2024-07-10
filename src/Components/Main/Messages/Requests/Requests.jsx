import LeftSide from "./LeftSide/LeftSide";
import RightSide from "./RightSide/RightSide";

const Requests = ({ setSelectMenu }) => {
  return (
    <>
      <div className="w-full flex">
        <div id="leftRequest" className="w-[40%] border-r py-6 px-4">
          <LeftSide setSelectMenu={setSelectMenu} />
        </div>
        <div id="request" className="flex-1 flex items-center justify-center">
          <RightSide />
        </div>
      </div>
    </>
  );
};

export default Requests;
