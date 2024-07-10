import BackMenu from "./BackMenu";
import DecideMsgs from "./DecideMsgs";
import RequestsInbox from "./RequestsInbox";

const LeftSide = ({ setSelectMenu }) => {
  return (
    <>
      <BackMenu setSelectMenu={setSelectMenu} />
      <DecideMsgs />
      <RequestsInbox />
      <button className="text-red-500  w-full mt-4">Delete All</button>
    </>
  );
};

export default LeftSide;
