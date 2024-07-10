import { useSelector, useDispatch } from "react-redux";
import { exploreSlice, menuColorSlice } from "../../Store/Store";
import { searchSlice } from "../../Store/Store";
import { Link } from "react-router-dom";
const SingleMenu = ({ menuItems }) => {
  const dispatch = useDispatch();
  const bgColor = useSelector((store) => store.menuColorSlice.menuClassname);

  const handleBgColor = (id) => {
    dispatch(menuColorSlice.changeColor(id));
    dispatch(searchSlice.handleSearch(id));
    dispatch(exploreSlice.hide(id));
  };

  return (
    <>
      {menuItems.map((item) => (
        <Link
          to={item.path}
          key={item.id}
          onClick={(e) => {
            handleBgColor(item.id);
            !item.path && e.preventDefault();
          }}
          className={`w-full flex gap-3 cursor-pointer py-2 px-1 rounded-md min-w-[45px] max-xl:justify-center ${
            bgColor === item.id ? "bg-gray-100" : ""
          } ${!item.visible && "hideVisibility"}`}
        >
          <div className="text-2xl">{item.logo}</div>
          <p className="text-gray-700 max-xl:hidden select-none">{item.text}</p>
        </Link>
      ))}
    </>
  );
};

export default SingleMenu;
