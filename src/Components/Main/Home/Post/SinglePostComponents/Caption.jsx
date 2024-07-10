const Caption = ({ caption, name }) => {
  return (
    <>
      <p className="font-semibold text-sm text-gray-700 cursor-default">
        {name} <span className="text-black font-normal">{caption}</span>
      </p>
    </>
  );
};

export default Caption;
