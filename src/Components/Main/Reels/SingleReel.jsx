import { useSelector } from "react-redux";
import MusicInfo from "./MusicInfo";
import Title from "./Title";
import UserInfo from "./UserInfo";
import { IoMdVolumeHigh } from "react-icons/io";
import { IoMdVolumeOff } from "react-icons/io";
import { useEffect, useRef, useState } from "react";
import { FaRegHeart } from "react-icons/fa";
import { FaRegComment } from "react-icons/fa";
import { IoPaperPlaneOutline } from "react-icons/io5";
import { FaRegBookmark } from "react-icons/fa";
import { IoIosMore } from "react-icons/io";
const SingleReel = ({ data }) => {
  const className = useSelector((store) => store.reelOverlaySlice);
  const [ismuted, setIsMuted] = useState(false);
  const videoRef = useRef(null);

  const toggleMute = () => {
    setIsMuted(!ismuted);
    if (videoRef.current) {
      videoRef.current.muted = !ismuted;
    }
  };
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        const entry = entries[0];
        if (entry.isIntersecting) {
          videoRef.current.play();
        } else {
          videoRef.current.pause();
        }
      },
      {
        root: null,
        threshold: 0.5,
      }
    );

    if (videoRef.current) {
      observer.observe(videoRef.current);
    }

    return () => {
      if (videoRef.current) {
        observer.unobserve(videoRef.current);
      }
    };
  }, []);
  return (
    <>
      <div className="flex">
        <div
          className={`w-[300px] h-[500px] bg-black relative border overflow-hidden before:content-[''] before:absolute before:top-0 before:left-0 before:text-white before:w-full before:h-full before:bg-slidesShade ${
            className ? "before:inline-block" : "before:hidden"
          } shadow-[0_0_25px_15px_rgba(0,0,0,0.1)] mr-6`}
        >
          <video
            className="w-full h-full"
            autoPlay
            loop
            src={data.video}
            ref={videoRef}
            muted={ismuted}
          ></video>
          <div className="absolute bottom-0 left-0 text-white w-full flex flex-col items-start pl-3 gap-2">
            <UserInfo data={data} />
            <Title title={data.title} />
            <MusicInfo data={data} />
          </div>
          {ismuted ? (
            <IoMdVolumeOff
              id="IoMdVolumeOff"
              className="absolute cursor-pointer text-white top-2 rounded-full p-1 text-[30px] right-2"
              onClick={toggleMute}
            />
          ) : (
            <IoMdVolumeHigh
              id="IoMdVolumeOff"
              className="absolute cursor-pointer text-white top-2 rounded-full p-1 text-[30px] right-2"
              onClick={toggleMute}
            />
          )}
        </div>
        <div className="flex flex-col justify-end gap-7 select-none">
          <div className="flex items-center flex-col">
            <FaRegHeart className="text-xl cursor-pointer" />
            <p className="text-[12px]">{data.likes}</p>
          </div>
          <div className="flex items-center flex-col">
            <FaRegComment className="text-xl cursor-pointer" />
            <p className="text-[12px]">{data.comments}</p>
          </div>
          <div className="flex items-center flex-col pr-1">
            <IoPaperPlaneOutline className="text-[24px] cursor-pointer" />
          </div>
          <div className="flex items-center flex-col">
            <FaRegBookmark className="text-xl cursor-pointer" />
          </div>
          <div className="flex items-center flex-col">
            <IoIosMore className="text-xl cursor-pointer" />
          </div>
          <div className="flex items-center flex-col">
            <img src={data.songPic} className="w-6 h-6 rounded-md" />
          </div>
        </div>
      </div>
    </>
  );
};

export default SingleReel;
