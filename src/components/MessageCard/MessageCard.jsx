import { DELETE } from '../../utils/api';
import './index.css';
import ModalWindow from '../ModalWindow';
import { useState } from 'react';


const MessageCard = ({textContent, isRenderedList, onDeleteBtn}) => {
  const [isVisibile, setVisibile] = useState(false);
  const [isDeletable, setDeletable] = useState(false);
  
  const onBtnClick = () => {
  
    
      DELETE('messages', textContent.id)
        .then(() => onDeleteBtn(!isRenderedList))
    
  }

  return (
    <div className="MessageCard">
      <button onClick={() => setVisibile(true)} className="MessageCard__delete">X</button>
      <p className="MessageCard__text">
        { textContent.text }
      </p>
      <div className="MessageCard__info">
        <p className="MessageCard__info--sender">
          { textContent.sender }
        </p>
        <p className="MessageCard__info--date">
          { textContent.date }
        </p>
      </div>
      {
      isVisibile && <ModalWindow deleteFn={onBtnClick} setVisibile={setVisibile} setCondition={setDeletable} valueDeletable={isDeletable} mainModalText={"Vuoi davvero eliminare il seguente Post selezionato?"}/>
      }   
      </div>
  )
}

export default MessageCard;
