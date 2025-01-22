import logo from "../../images/personal_logo.jpg";
import "./Navbar.css";

function Navbar() {
  return (
    <div className="my-navbar">
      <div className="my-logo">
        <img src={logo} alt="logo" />
      </div>
      {/* <div className="my-name">Sheng Zhan</div> */}
      <ul>
        <li>Projects</li>
        <li>Skills</li>
        <li>Education</li>
        <li>Contact Me</li>
      </ul>
    </div>
  );
}

export default Navbar;
