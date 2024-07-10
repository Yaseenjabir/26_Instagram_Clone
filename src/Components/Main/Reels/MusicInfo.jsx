import { IoMusicalNotesSharp } from "react-icons/io5";

const MusicInfo = ({ data }) => {
  return (
    <>
      <div className="flex gap-1 select-none mb-[1px]">
        <div className="flex items-center gap-2 overflow-hidden whitespace-nowrap animate-marquee ">
          <IoMusicalNotesSharp className="mt-1" />
          <p className="inline-block text-[14px]">{data.songName}</p>
        </div>
      </div>
    </>
  );
};

export default MusicInfo;
