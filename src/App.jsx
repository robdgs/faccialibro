import { useState } from "react";
import AddMessage from "./components/AddMessage";
import AddFriend from "./components/AddFriend";
import FriendCardList from "./components/FriendCardList";
import MessageCardList from "./components/MessageCardList";
import Navbar from "./components/Navbar";
import "./App.css";

function App() {
  const [isRenderedList, setRenderedList] = useState(false);
  const [searchValue, setSearchValue] = useState();

  return (
    <div className="App">
      <Navbar />
      <div className="App__friends">
        <h3>Lista degli amici</h3>
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
