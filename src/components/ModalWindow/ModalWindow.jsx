import './index.css';
import Button from '../Button'
import AddFriend from '../AddFriend';

const ModalWindow = ({mainModalText, setCondition, setVisibile, deleteFn, type,isRenderedList, onAddButton, setIsLoginWindowVisible, setRenderedList}) => {

    return (
        <div className="ModalWindow">
            <div className={type === 'submit' ? 'ModalWindow__content' : type === 'login' && 'ModalWindow__fullcontent'}>
                
                <p>{mainModalText}</p>
               
                <div className='ModalWindow__Buttons'>
                   { type === 'submit' ? 
                   <>
                   <Button onClick={() => {
                        setCondition(false)
                        setVisibile(false)}} color='lightcoral' textContent='Annulla'/>
                    <Button onClick={() => {
                        setCondition(true);
                        
                        deleteFn();
                    }} color='lightseagreen' textContent='Si'/>
                    </>
                    : type === 'login' && 
                    <>
                    <AddFriend isRenderedList={ isRenderedList } onAddButton={ onAddButton } setIsLoginWindowVisible={setIsLoginWindowVisible} setRenderedList={setRenderedList} />
                    
                    </>
                    }
                    
                </div>
            </div>
        </div>
    )
};

export default ModalWindow;