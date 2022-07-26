import { useState, useEffect } from 'react'; 
import FriendCard from '../FriendCard';
import { GET } from '../../utils/api';
import './index.css';

const FriendCardList = ({filterMsgFriends, searchValue}) => {
  const [friendList, setFriendList] = useState([]);

  useEffect(() => {
    GET('friends').then(data => setFriendList(data));
  }, []);

  return (
    <div className="FriendCardList">
      {
        friendList.length
          ? friendList.map(friend => <FriendCard key={friend.id} onHandleClick={() => {filterMsgFriends(friend.name)
          console.log(searchValue) }} friendData={friend}/>)
          : <p>Loading...</p>
      }
    </div>
  )
}

export default FriendCardList;