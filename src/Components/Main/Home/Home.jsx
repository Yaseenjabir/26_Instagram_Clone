import PostList from "./Post/PostList";
import Stories from "./Post/Stories";

const Home = () => {
  return (
    <>
      <div className="w-full">
        <Stories />
      </div>
      <div className="max-xl:w-[80%]">
        <PostList />
      </div>
    </>
  );
};

export default Home;
