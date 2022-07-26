import './index.css';

const FriendCard = ({ friendData, onHandleClick }) => {
  const { photo, name } = friendData;

  return (
    <div onClick={onHandleClick} className="FriendCard">
      <img className="FriendCard__photo" src={ photo } alt={ name } />
      <p className="FriendCard__name">{ name }</p>
    </div>
  )
}

export default FriendCard;