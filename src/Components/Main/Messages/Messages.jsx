import Primary from "./LeftMsgs/PrimaryMessages/Primary";
import TopData from "./TopData";
import PrimaryInbox from "./LeftMsgs/PrimaryMessages/PrimaryInbox";
import { useState } from "react";
import GeneralInbox from "./LeftMsgs/General.jsx/GeneralInbox";
import General from "./LeftMsgs/General.jsx/General";
import Requests from "./Requests/Requests";
const Messages = () => {
  const [selectMenu, setSelectMenu] = useState("Primary");

  return (
    <>
      {selectMenu === "Requests" ? (
        <Requests setSelectMenu={setSelectMenu} />
      ) : (
        <>
          <div id="messages" className="w-[40%] border flex flex-col">
            <TopData selectMenu={selectMenu} setSelectMenu={setSelectMenu} />
            {selectMenu === "Primary" ? (
              <Primary />
            ) : selectMenu === "General" ? (
              <General />
            ) : (
              ""
            )}
          </div>
          <div
            id="PrimaryInbox"
            className="w-[60%] flex flex-col justify-center items-center"
          >
            {selectMenu === "Primary" ? (
              <PrimaryInbox />
            ) : selectMenu === "General" ? (
              <GeneralInbox />
            ) : (
              ""
            )}
          </div>
        </>
      )}
    </>
  );
};

export default Messages;
