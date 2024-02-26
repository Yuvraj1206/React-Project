import "./App.css";
import "bootstrap/dist/css/bootstrap.css";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Sidebar from "./components/Sidebar";
import CreatePost from "./components/CreatePost";
import PostList from "./components/PostList";
import { useState } from "react";
import PostListProvider from "./store/post-list-store";

function App() {
  const [selectTab, setSelectTab] = useState("Home");

  return (
    <PostListProvider>
      <div className="mainContainer">
        <Sidebar setSelectTab={setSelectTab} selectTab={selectTab}></Sidebar>

        <div className="content">
          <Header></Header>

          {selectTab === "Home" ? (
            <center>
              <PostList></PostList>
            </center>
          ) : (
            <CreatePost></CreatePost>
          )}
        </div>
      </div>
      <Footer></Footer>
    </PostListProvider>
  );
}

export default App;
