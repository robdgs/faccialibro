import { DELETE } from "../../utils/api";
import "./index.css";

const Navbar = () => {
  const deleteFn = (id) => {
    DELETE("friends", id)
      .then(() => localStorage.clear("username.id"))
      .then(() => window.location.reload());
  };

  return (
    <div className="Navbar">
      <img className="Navbar__logo" src={require("./logo.png")} alt="img" />
      <ul className="Navbar__list">
        <li className='ListItem'>
          <a  className="ListItem__link" href="#">Home</a>
        </li>
        <li className='ListItem'>
          <a className="ListItem__link" href="#">Posts</a>
        </li>
        <li className='ListItem'>
          <a className="ListItem__link" href="#">Messages</a>
        </li>
        <li className='ListItem'>
          <a
            href="#"
            onClick={() => {
              localStorage.clear("username");
              deleteFn(localStorage.getItem("username.id"));
            }}
            className="ListItem__link"
          >
            Log Out
          </a>
        </li>
      </ul>
    </div>
  );
};

export default Navbar;
