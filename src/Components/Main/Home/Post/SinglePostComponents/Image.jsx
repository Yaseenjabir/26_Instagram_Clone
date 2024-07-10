const Images = ({ img }) => {
  return (
    <>
      <div className="w-full">
        <img src={img} className="rounded-sm w-full" />
      </div>
    </>
  );
};

export default Images;
