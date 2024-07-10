const Likes = ({ likes }) => {
  return (
    <>
      <p className="min-w-[80px] text-[14px] font-semibold text-gray-700 cursor-pointer">
        {likes} likes
      </p>
    </>
  );
};

export default Likes;
