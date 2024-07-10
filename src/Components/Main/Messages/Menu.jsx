const Menu = ({ setSelectMenu, selectMenu }) => {
  const Menus = ["Primary", "General", "Requests"];

  const className = selectMenu;

  const handleClass = (name) => {
    setSelectMenu(name.item);
  };

  const menuColor = "text-gray-950 border-b border-black";
  const noMenuColor = "text-gray-600";

  return (
    <>
      <div className="w-full flex mt-5">
        {Menus.map((item, index) => (
          <div
            key={index}
            onClick={() => handleClass({ item })}
            className={`flex-1 pb-2 cursor-pointer font-semibold text-[15px] transition-[border] duration-300 ease-linear ${
              className === item ? menuColor : noMenuColor
            }`}
          >
            <p className="mx-auto w-min">{item}</p>
          </div>
        ))}
      </div>
    </>
  );
};

export default Menu;
