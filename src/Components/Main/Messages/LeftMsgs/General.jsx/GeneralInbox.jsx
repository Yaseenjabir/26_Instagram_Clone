import { LiaFacebookMessenger } from "react-icons/lia";

const GeneralInbox = () => {
  return (
    <div className="flex flex-col items-center cursor-default">
      <div className="border-[3px] border-black rounded-full p-4 w-min">
        <LiaFacebookMessenger className="text-[70px]" />
      </div>
      <h1 className="text-lg font-semibold text-gray-800 mt-3">
        Your Messages
      </h1>
      <p className="text-gray-600">
        Send private messages and photos to a friend or groups
      </p>
      <button className="bg-blue-500 px-5 py-2 rounded-md cursor-pointer text-white font-semibold text-sm mt-5">
        Send Messages
      </button>
    </div>
  );
};

export default GeneralInbox;
