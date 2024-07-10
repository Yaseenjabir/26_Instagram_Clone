import { useDispatch, useSelector } from "react-redux";
import { menuColorSlice } from "../../Store/Store";
const More = () => {
  const dispatch = useDispatch();
  const bgColor = useSelector((store) => store.menuColorSlice);

  const id = 9;

  const handleBgColor = () => {
    dispatch(menuColorSlice.changeColor(id));
  };

  return (
    <>
      <div
        className={`p-2 cursor-pointer flex gap-3 items-center max-xl:justify-center ${
          bgColor === id ? "bg-gray-100" : ""
        } hideVisibility`}
        onClick={handleBgColor}
      >
        <div className="w-[20px] flex flex-col gap-1">
          <hr className="border-[1px] border-gray-700" />
          <hr className="border-[1px] border-gray-700" />
          <hr className="border-[1px] border-gray-700" />
        </div>
        <h1 className="max-xl:hidden">More</h1>
      </div>
    </>
  );
};

export default More;
