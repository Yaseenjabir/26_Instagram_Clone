import { LuDot } from "react-icons/lu";

const SingleInbox = ({ data }) => {
  const theMsg = data.msg;
  const result = theMsg.length > 27 ? theMsg.slice(0, 27) + "..." : theMsg;

  return (
    <>
      <div className="flex gap-2">
        <div className="flex-shrink-0 w-[60px] h-[60px]">
          <img className="w-full h-full rounded-full" src={data.profilePic} />
        </div>
        <div className="flex-grow flex flex-col justify-center gap-1 cursor-pointer">
          <h1 className="text-[14px] text-gray-900">{data.username}</h1>
          {data.lastSeen ? (
            <p className="text-[12px] text-gray-600">{data.active}</p>
          ) : (
            <>
              <div className="text-[12px] text-gray-600 flex items-center">
                <p>{result}</p>
                <LuDot />
                <p>{data.time}</p>
              </div>
            </>
          )}
        </div>
      </div>
    </>
  );
};

export default SingleInbox;
