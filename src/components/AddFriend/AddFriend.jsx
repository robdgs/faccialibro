import { useState } from 'react';
import './index.css'
import Button from '../Button'
import { POST } from '../../utils/api';

const AddFriend = ({setRenderedList, isRenderedList}) => {
    const [name, setName] = useState('');
    const [photoUrl, setPhotoUrl] = useState('');


    const onFormSubmit = (e) => {
        e.preventDefault();
    
        if (name && photoUrl) {
          POST('friends', {
            name: name,
            photo: photoUrl,
          })
          .then(() => {
            setName('');
            setPhotoUrl('');
            setRenderedList(!isRenderedList);
          })
        }
      }

    return (
        <div className="AddFriend">
            <form action="submit" onSubmit={onFormSubmit} className="AddFriend__form">
                <div className="AddFriend__inputs">
                    <input type="text" value={name} onChange={(e) => setName(e.target.value)} className="AddFriend__name" placeholder='Insert your name' required />
                    <input type="text" value={photoUrl} onChange={(e) => setPhotoUrl(e.target.value)} className="AddFriend__photoAddFriend__photourl" placeholder='Insert your photo url' required/>
                </div>
                <Button textContent='Add Friend' color='lightseagreen' type='submit' />
            </form>
        </div>
    )
}

export default AddFriend;