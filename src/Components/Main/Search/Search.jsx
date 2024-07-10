import Recent from "./Recent";
import Searchbar from "./Searchbar";
import { useSelector } from "react-redux";
const Search = () => {
  const { className } = useSelector((store) => store.searchSlice);

  return (
    <>
      <div
        className={`fixed top-0 left-[240px] border w-[400px] h-[100vh] bg-white rounded-xl py-8 translate-x-[-160%] transition-all ease-in-out duration-500 z-10 ${
          className && "translate-x-[0%]"
        } max-xl:translate-x-[-32%] hideVisibility`}
      >
        <Searchbar />
        <hr />
        <Recent />
      </div>
    </>
  );
};

export default Search;
