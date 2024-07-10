import SingleReel from "./SingleReel";
import { data } from "./assets/ReelsData";
const Reels = () => {
  return (
    <>
      <div className="flex flex-col gap-5">
        {data.map((item, index) => (
          <SingleReel key={index} data={item} />
        ))}
      </div>
    </>
  );
};

export default Reels;
