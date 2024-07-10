import SinglePost from "./SinglePost";
import { Data } from "../assets/SinglePostData";

const PostList = () => {
  return (
    <main className="flex flex-col gap-10 py-16 justify-center items-center min-h-[100vh]">
      {Data.map((item, index) => (
        <SinglePost key={index} data={item} />
      ))}
    </main>
  );
};

export default PostList;
