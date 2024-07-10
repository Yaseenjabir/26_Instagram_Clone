import SingleSuggestion from "./SingleSuggestion";
import { Data } from "./assets/SuggestionsData";
const Suggested = () => {
  return (
    <>
      <div className="mt-7 px-2">
        <div className="flex justify-between items-center mb-4">
          <h1 className="text-[13px] font-bold text-gray-400">
            Suggested for you
          </h1>
          <span className="text-[14px] font-semibold cursor-pointer">
            See All
          </span>
        </div>
        <div className="flex flex-col gap-4">
          {Data.map((item, index) => (
            <SingleSuggestion key={index} data={item} />
          ))}
        </div>
      </div>
    </>
  );
};

export default Suggested;
