import { switchImg } from "./assets/Images";
const SwitchProfile = () => {
  return (
    <>
      <div className=" flex w-full cursor-pointer">
        <div className="w-[16%]">
          <img src={switchImg.switchPic} className="rounded-full" />
        </div>
        <div className="w-[65%] px-3">
          <h1 className="text-[13px] font-bold">ezgod791</h1>
          <p className="font-thin text-gray-400 text-[15px] mt-[-5px]">Ezgod</p>
        </div>
        <div className="w-[20%]  flex items-center">
          <span className="text-blue-500 cursor-pointer font-semibold">
            switch
          </span>
        </div>
      </div>
    </>
  );
};

export default SwitchProfile;
