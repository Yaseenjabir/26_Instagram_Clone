import Menu from "./Menu";
import Username2 from "./Username2";
const TopData = ({ setSelectMenu, selectMenu }) => {
  return (
    <>
      <div className="border-b pt-10">
        <Username2 />
        <Menu selectMenu={selectMenu} setSelectMenu={setSelectMenu} />
      </div>
    </>
  );
};

export default TopData;
