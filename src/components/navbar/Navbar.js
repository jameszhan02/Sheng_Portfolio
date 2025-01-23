import logo from "../../images/personal_logo.jpg";
import "./Navbar.css";

function Navbar() {
  return (
    <div className="my-navbar">
      <div className="my-logo">
        <img src={logo} alt="logo" />
      </div>
      <ul>
        <li>Projects</li>
        <li>About Me</li>
      </ul>
    </div>
  );
}

export default Navbar;
