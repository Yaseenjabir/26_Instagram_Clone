import { useRef, useState } from "react";
import { useDispatch } from "react-redux";
import { reelOverlaySlice } from "../../Store/Store";

const Title = ({ title }) => {
  const dispatch = useDispatch();
  const [isOverlayVisible, setIsOverlayVisible] = useState(false);

  const [showText, setShowText] = useState(
    title.length > 32 ? title.slice(0, 32) + "..." : title
  );

  const handleMore = () => {
    if (!isOverlayVisible) {
      setShowText(title);
      dispatch(reelOverlaySlice.manageOverlay("hide"));
    } else {
      setShowText(title.length > 32 ? title.slice(0, 32) + "..." : title);
      dispatch(reelOverlaySlice.manageOverlay("show"));
    }
    setIsOverlayVisible(!isOverlayVisible);
  };

  return (
    <>
      <div className="flex">
        <p onClick={handleMore} className="cursor-default select-none">
          {showText}
        </p>
      </div>
    </>
  );
};

export default Title;
