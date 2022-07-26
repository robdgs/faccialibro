import { useState } from 'react';
import AddMessage from './components/AddMessage';
import FriendCardList from './components/FriendCardList';
import MessageCardList from './components/MessageCardList';
import './App.css';


function App() {
  const [isRenderedList, setRenderedList] = useState(false);
 const [searchValue, setSearchValue] = useState();
  

  return (
    <div className="App">
      <div className="App__friends">
        <h3>Lista degli amici</h3>
        <FriendCardList filterMsgFriends={setSearchValue} searchValue={searchValue} />
        
      </div>
      <div className="App_messages">
        <AddMessage isRenderedList={ isRenderedList } onAddButton={ setRenderedList }/>
        <input onChange={(e) => setSearchValue(e.target.value)} type="text" className="search_msg" placeholder="Search"></input>
        <MessageCardList filterValue={searchValue} isRenderedList={ isRenderedList } setRenderedList={setRenderedList}/>
      </div>
      
    </div>
  );
}

export default App;