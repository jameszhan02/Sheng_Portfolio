import avator from "../../images/avatar.jpg";
import realAvatar from "../../images/real_avatar.jpg";
import "./Navbar.css";

function Navbar() {
  return (
    <div className="my-navbar">
      <div className="my-logo">
        <div className="flip-container">
          <div className="flipper">
            <img src={realAvatar} alt="logo" className="back" />
            <img src={avator} alt="logo" className="front" />
          </div>
        </div>
      </div>
      <ul>
        <li>Projects</li>
        <li>About Me</li>
      </ul>
    </div>
  );
}

export default Navbar;
