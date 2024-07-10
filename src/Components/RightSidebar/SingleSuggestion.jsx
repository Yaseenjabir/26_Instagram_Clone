const SingleSuggestion = ({ data }) => {
  return (
    <>
      <div className=" flex w-full cursor-pointer">
        <div className="w-[15%]">
          <img src={data.img} className="rounded-full h-[43px]" />
        </div>
        <div className="w-[65%] px-3">
          <h1 className="text-[13px] font-bold">{data.name}</h1>
          <p className="font-thin text-gray-400 text-[13px] mt-[-5px]">
            suggested for you
          </p>
        </div>
        <div className="w-[20%]  flex items-center">
          <span className="text-blue-500 cursor-pointer font-semibold">
            Follow
          </span>
        </div>
      </div>
    </>
  );
};

export default SingleSuggestion;
