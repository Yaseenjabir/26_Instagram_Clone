import { FaArrowLeft, FaArrowRight } from "react-icons/fa";
import SingleStory from "../SingleStory";
import { data } from "../assets/StoriesData";
import { useEffect, useRef, useState } from "react";

const Stories = () => {
  const scrollContainerRef = useRef(null);
  const [isAtEnd, setIsAtEnd] = useState(false);
  const [isAtStart, setIsAtStart] = useState(true);

  const scrollRight = () => {
    scrollContainerRef.current.scrollLeft += 100;
  };

  const scrollLeft = () => {
    scrollContainerRef.current.scrollLeft -= 100;
  };

  const checkScrollPosition = () => {
    const { scrollLeft, scrollWidth, clientWidth } = scrollContainerRef.current;
    setIsAtEnd(scrollLeft + clientWidth >= scrollWidth);
    setIsAtStart(scrollLeft <= 0);
  };

  useEffect(() => {
    const container = scrollContainerRef.current;
    container.addEventListener("scroll", checkScrollPosition);

    // Check initial position
    checkScrollPosition();

    return () => {
      container.removeEventListener("scroll", checkScrollPosition);
    };
  }, []);

  return (
    <>
      <div
        id="stories"
        className="h-[100px] flex items-center justify-center w-full relative px-10"
      >
        <div
          ref={scrollContainerRef}
          className="flex overflow-x-hidden flex-nowrap gap-5"
          style={{ scrollBehavior: "smooth" }}
        >
          {data.map((item, index) => (
            <SingleStory key={index} data={item} />
          ))}
        </div>
        {!isAtEnd && (
          <FaArrowRight
            onClick={scrollRight}
            className="absolute bg-white p-1 text-[25px] rounded-full right-12 top-8 cursor-pointer"
          />
        )}
        {!isAtStart && (
          <FaArrowLeft
            onClick={scrollLeft}
            className="absolute bg-white p-1 text-[25px] rounded-full left-12 top-8 cursor-pointer"
          />
        )}
      </div>
    </>
  );
};

export default Stories;
