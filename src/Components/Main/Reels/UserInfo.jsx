const UserInfo = ({ data }) => {
  return (
    <>
      <div className="select-none grid grid-cols-3 w-[250px] max-w-[260px] justify-items-center items-center translate-x-[-26px]">
        <img className="w-[30px] rounded-full h-[30px]" src={data.userImg} />
        <h1 className="mr-3 font-semibold">{data.username}</h1>
        <button className="border-[1px] border-white w-14 rounded-md">
          Follow
        </button>
      </div>
    </>
  );
};

export default UserInfo;
