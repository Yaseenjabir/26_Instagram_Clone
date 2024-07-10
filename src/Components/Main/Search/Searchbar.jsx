import { IoIosCloseCircle } from "react-icons/io";

const Searchbar = () => {
  return (
    <>
      <div className="px-5">
        <h1 className="font-semibold text-2xl text-gray-700">Search</h1>
        <div className="relative mt-10 mb-5">
          <input
            type="text"
            placeholder="Search"
            className="bg-gray-100 py-2 px-3 rounded-lg w-full outline-none"
          />
          <IoIosCloseCircle className="absolute top-3 right-2 text-gray-400" />
        </div>
      </div>
    </>
  );
};

export default Searchbar;
