const SingleStory = ({ data }) => {
  const truncateName = (name) => {
    return name.length > 7 ? `${name.substring(0, 7)}...` : name;
  };
  return (
    <>
      <div className="flex cursor-pointer min-w-[64px] h-[83px]  flex-col items-center">
        <div id="instaStory" className="h-[80px]">
          <img
            id="instaStory"
            className="w-[100%] h-[100%] rounded-full"
            src={data.img}
          />
        </div>
        <h1 className="text-[13px] text-gray-700">{truncateName(data.name)}</h1>
      </div>
    </>
  );
};

export default SingleStory;
