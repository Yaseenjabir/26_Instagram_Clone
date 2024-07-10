import { BrowserRouter, Route, Routes } from "react-router-dom";
import Sidebar from "./Components/Sidebar/Sidebar";
import RightSidebar from "./Components/RightSidebar/RightSidebar";
import Home from "./Components/Main/Home/Home";
import Search from "./Components/Main/Search/Search";
import Explore from "./Components/Main/Explore/Explore";
import Reels from "./Components/Main/Reels/Reels";
import Messages from "./Components/Main/Messages/Messages";

function App() {
  return (
    <>
      <BrowserRouter>
        <Search />
        <div className="w-full flex">
          <div
            className="w-[18%] min-w-[9%] max-xl:w-[9%] border-r-[1px] relative z-[1000]"
            id="sidebar"
          >
            <Sidebar />
          </div>
          <Routes>
            <Route
              path="/"
              element={
                <div id="home" className="w-[82%] flex max-xl:w-[90%]">
                  <div
                    className="w-[68%] flex items-center justify-center flex-col"
                    id="homeChild"
                  >
                    <Home />
                  </div>
                  <div className="w-[32%]" id="rightSidebar">
                    <RightSidebar />
                  </div>
                </div>
              }
            ></Route>
            <Route
              path="/explore"
              element={
                <>
                  <div id="home" className="w-[82%] min-h-[100vh] border ">
                    <Explore />
                  </div>
                </>
              }
            />
            <Route
              path="/reels"
              element={
                <>
                  <div
                    id="home"
                    className="w-[82%] min-h-[100vh] border flex flex-col items-center pt-5 pb-20"
                  >
                    <Reels />
                  </div>
                </>
              }
            />
            <Route
              path="/messages"
              element={
                <div id="home" className="w-[82%] h-screen flex max-xl:w-[90%]">
                  <Messages />
                </div>
              }
            />
          </Routes>
        </div>
      </BrowserRouter>
    </>
  );
}

export default App;
