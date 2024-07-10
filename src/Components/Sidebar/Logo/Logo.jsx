import logo from "./logo.png";

const Logo = () => {
  return (
    <>
      <div
        id="logo"
        className="cursor-pointer w-full flex items-center gap-3 mb-8 max-xl:justify-center"
      >
        <img src={logo} className="w-[30px]" />
        <h1 className="font-bold text-xl text-gray-700 max-xl:hidden">
          Instagram
        </h1>
      </div>
    </>
  );
};
export default Logo;
