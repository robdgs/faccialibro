import "./index.css";

const Navbar = () => {
  return (
    <div className="Navbar">
      <img className="Navbar__logo" src={require('./logo.png')} alt="img" />
      <ul className="Navbar__list">
        <li>
          <a href="/">Home</a>
        </li>
        <li>
          <a href="/">Posts</a>
        </li>
        <li>
          <a href="/">Messages</a>
        </li>
      </ul>
    </div>
  );
};

export default Navbar;
