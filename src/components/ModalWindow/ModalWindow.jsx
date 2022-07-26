import './index.css';
import Button from '../Button'

const ModalWindow = ({mainModalText, setCondition, setVisibile, deleteFn}) => {

    return (
        <div className="ModalWindow">
            <div className="ModalWindow__content">
                
                <p>{mainModalText}</p>
               
                <div className='ModalWindow__Buttons'>
                    <Button onClick={() => {
                        setCondition(false)
                        setVisibile(false)}} color='lightcoral' textContent='Annulla'/>
                    <Button onClick={() => {
                        setCondition(true);
                        setVisibile(false)
                        deleteFn();
                    }} color='lightseagreen' textContent='Si'/>
                    
                </div>
            </div>
        </div>
    )
};

export default ModalWindow;