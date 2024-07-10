import { LuDot } from "react-icons/lu";

const SingleRequest = ({ data }) => {
  const result =
    data.msg.length > 35 ? data.msg.slice(0, 35) + "..." : data.msg;

  return (
    <div className="flex relative cursor-pointer select-none">
      <div className=" flex-shrink-0 w-[60px] h-[60px]">
        <img className="rounded-full w-full h-full" src={data.pic} />
      </div>
      <div className=" flex flex-col justify-center px-2 text-[14px] flex-1 font-semibold">
        <h1>{data.username}</h1>
        <div className="flex items-center text-gray-600">
          <p className="text-black">{result}</p>
          <LuDot />
          <p>{data.time}</p>
        </div>
      </div>
      <LuDot className="absolute top-2 right-2 text-blue-500 text-4xl" />
    </div>
  );
};

export default SingleRequest;
