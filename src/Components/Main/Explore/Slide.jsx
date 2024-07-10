import { FaComment, FaHeart } from "react-icons/fa";
import { useState, useEffect } from "react";

const Slide = ({ SlideImgs }) => {
  const [hoverIndex, setHoverIndex] = useState(null);

  const handleOnHover = (index) => {
    setHoverIndex(index);
  };

  const handleOnMouseOver = () => {
    setHoverIndex(null);
  };

  useEffect(() => {
    const newOpacity = SlideImgs.map((_, idx) =>
      idx === hoverIndex ? "opacity-1" : "opacity-0"
    );

    setOpacity(newOpacity);
  }, [hoverIndex]);

  const [opacity, setOpacity] = useState(
    Array(SlideImgs.length).fill("opacity-0")
  );

  return (
    <>
      <div className="flex flex-col gap-3">
        {SlideImgs.map((item, index) => (
          <div key={index} className="relative">
            <div
              onMouseEnter={() => handleOnHover(index)}
              onMouseLeave={handleOnMouseOver}
              className={`absolute top-0 left-0 w-full h-full bg-slidesShade flex items-center justify-center ${opacity[index]} transition-all ease-in-out duration-200 cursor-pointer`}
            >
              <div className="text-white flex gap-8 max-md:flex-col max-md:gap-1 max-md:items-center">
                <div className="flex items-center gap-2">
                  <FaHeart />
                  <p className="font-bold max-md:font-semibold max-md:text-sm">
                    {item.likes}
                  </p>
                </div>
                <div className="flex items-center gap-2">
                  <FaComment />
                  <p className="font-bold max-md:font-semibold max-md:text-sm">
                    {item.comments}
                  </p>
                </div>
              </div>
            </div>
            <img
              className="cursor-pointer"
              src={item.img}
              alt={`Slide ${index}`}
            />
          </div>
        ))}
      </div>
    </>
  );
};

export default Slide;
