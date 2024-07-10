import Username from "./SinglePostComponents/Username";
import Image from "./SinglePostComponents/Image";
import Reactions from "./SinglePostComponents/Reactions";
import Likes from "./SinglePostComponents/Likes";
import Caption from "./SinglePostComponents/Caption";
import Comments from "./SinglePostComponents/Comments";
import AddComment from "./SinglePostComponents/AddComment";
const SinglePost = ({ data }) => {
  return (
    <>
      <div className="w-full flex flex-col gap-3 px-5 max-w-[650px]">
        <Username profile={data.profilePic} name={data.name} ago={data.ago} />
        <Image img={data.img} />
        <Reactions />
        <div className="flex flex-col gap-1">
          <Likes likes={data.likes} />
          <Caption name={data.name} caption={data.caption} />
          <div>
            <Comments comments={data.comments} />
            <AddComment />
          </div>
        </div>
        <hr />
      </div>
    </>
  );
};

export default SinglePost;
