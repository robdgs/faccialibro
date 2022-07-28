import { useState, useEffect } from "react";
import AddMessage from "./components/AddMessage";
import AddFriend from "./components/AddFriend";
import FriendCardList from "./components/FriendCardList";
import MessageCardList from "./components/MessageCardList";
import Navbar from "./components/Navbar";
import ModalWindow from "./components/ModalWindow";

import "./App.css";

function App() {
  const [isRenderedList, setRenderedList] = useState(false);
  const [searchValue, setSearchValue] = useState("");
  const [isLoginWindowVisible, setIsLoginWindowVisible] = useState(true);

  useEffect(() => {
    if (localStorage.getItem("username")) {
      setIsLoginWindowVisible(false);
    }
  }, []);

  return (
    <div className="App">
      <Navbar />
      {isLoginWindowVisible && (
        <ModalWindow
          type="login"
          setRenderedList={setRenderedList}
          setIsLoginWindowVisible={setIsLoginWindowVisible}
          isRenderedList={isRenderedList}
          onAddButton={setRenderedList}
        />
      )}

      <div className="App__friends">
        <FriendCardList
          filterMsgFriends={setSearchValue}
          searchValue={searchValue}
        />
        <AddFriend
          isRenderedList={isRenderedList}
          setRenderedList={setRenderedList}
        />
      </div>
      <div className="App_messages">
        <AddMessage
          isRenderedList={isRenderedList}
          onAddButton={setRenderedList}
        />
        <input
          onChange={(e) => setSearchValue(e.target.value)}
          type="text"
          className="search_msg"
          placeholder="Search"
        ></input>
        <MessageCardList
          filterValue={searchValue}
          isRenderedList={isRenderedList}
          setRenderedList={setRenderedList}
        />
      </div>
    </div>
  );
}

export default App;
