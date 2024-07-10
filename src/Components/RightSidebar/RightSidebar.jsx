import SwitchProfile from "./SwitchProfile";
import Suggested from "./Suggested";
import Menu from "./Menu";

const RightSidebar = () => {
  return (
    <>
      <div className="py-10 px-5">
        <SwitchProfile />
        <Suggested />
        <Menu />
      </div>
    </>
  );
};

export default RightSidebar;
