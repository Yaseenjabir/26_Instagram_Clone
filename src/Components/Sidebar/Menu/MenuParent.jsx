import { AiOutlineHome } from "react-icons/ai";
import { IoMdSearch } from "react-icons/io";
import SingleMenu from "./SingleMenu";
import { MdOutlineAccountCircle, MdOutlineExplore } from "react-icons/md";
import { BsCameraReels } from "react-icons/bs";
import { CiHeart, CiSquarePlus } from "react-icons/ci";
import { RiMessengerLine } from "react-icons/ri";

const MenuParent = () => {
  const menuItems = [
    {
      id: "1",
      text: "Home",
      logo: <AiOutlineHome />,
      path: "/",
      visible: true,
    },
    { id: "2", text: "Search", logo: <IoMdSearch />, path: "", visible: false },
    {
      id: "3",
      text: "Explore",
      logo: <MdOutlineExplore />,
      path: "/explore",
      visible: true,
    },
    {
      id: "4",
      text: "Reels",
      logo: <BsCameraReels />,
      path: "/reels",
      visible: true,
    },
    {
      id: "5",
      text: "Messages",
      logo: <RiMessengerLine />,
      path: "/messages",
      visible: true,
    },
    // {
    //   id: "6",
    //   text: "Notifications",
    //   logo: <CiHeart />,
    //   path: "",
    //   visible: false,
    // },
    // {
    //   id: "7",
    //   text: "Create",
    //   logo: <CiSquarePlus />,
    //   path: "",
    //   visible: true,
    // },
    // {
    //   id: "8",
    //   text: "Profile",
    //   logo: <MdOutlineAccountCircle />,
    //   path: "",
    //   visible: true,
    // },
  ];

  return (
    <>
      <div id="menuParent" className="flex flex-col gap-2 mb-8">
        <SingleMenu menuItems={menuItems} />
      </div>
    </>
  );
};

export default MenuParent;
