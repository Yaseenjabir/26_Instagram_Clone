const Recent = () => {
  return (
    <>
      <div className="px-7 flex flex-col h-[430px] py-5">
        <h1 className="text-sm font-bold text-gray-700 cursor-default">
          Recent
        </h1>
        <div className="h-full flex flex-col items-center justify-center">
          <h1 className="text-sm font-semibold text-gray-800 cursor-default">
            No recent searches
          </h1>
        </div>
      </div>
    </>
  );
};

export default Recent;
