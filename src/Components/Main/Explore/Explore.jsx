import Slide from "./Slide";
import { Slide1Imgs } from "./assets/Slide1";
import { Slide2Imgs } from "./assets/Slide2";
import { Slide3Imgs } from "./assets/Slide3";
const Explore = () => {
  return (
    <>
      <div className="grid grid-cols-3 gap-3 py-5 px-7 relative z-0">
        <Slide SlideImgs={Slide1Imgs} />
        <Slide SlideImgs={Slide2Imgs} />
        <Slide SlideImgs={Slide3Imgs} />
      </div>
    </>
  );
};

export default Explore;
