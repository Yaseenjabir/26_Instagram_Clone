import Logo from "./Logo/Logo";
import MenuParent from "./Menu/MenuParent";
import More from "./Menu/More";

const Sidebar = () => {
  return (
    <div id="sidebarMenu" className=" bg-white w-full py-10 px-5 max-lg:px-3">
      <Logo />
      <MenuParent />
    </div>
  );
};
export default Sidebar;
