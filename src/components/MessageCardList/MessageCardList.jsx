import { useState, useEffect } from 'react';
import MessageCard from '../MessageCard';
import { GET } from '../../utils/api';
import './index.css';

const MessageCardList = ({ isRenderedList, setRenderedList, deleteCondition, filterValue }) => {
  const [messageList, setMessageList] = useState([]);

  useEffect(() => {
      GET('messages')
      .then((data) => {

        if (filterValue) {
          
          setMessageList(data.filter((message) => message.sender.toLowerCase().includes(filterValue.toLowerCase())).sort((a, b) => dateSort(a,b)));
        }

        else {
          setMessageList(data.sort((a, b) => dateSort(a,b)))
        }

       })
      
  }, [isRenderedList, filterValue]);

  const dateSort = (a, b) => a.date < b.date ? 1 : -1;

  return (
    <div className="MessageCardList">
      {
        messageList.length
          ? messageList.map(message => <MessageCard deleteCondition={deleteCondition} isRenderedList={isRenderedList} onDeleteBtn={setRenderedList} textContent={ message } key={ message.id }/>)
          : <p>Loading...</p>
      }
    </div>
  )
}

export default MessageCardList;