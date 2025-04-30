import CoolDivider from "../cooldivider/CoolDivider";
import "./Footer.css";

function Footer() {
  return (
    <div className="footer-wrapper">
      <CoolDivider />
      <div className="footer-content"></div>
      <CoolDivider />
      <div className="auth-info">Designed & Built by Sheng Zhan @2022</div>
    </div>
  );
}

export default Footer;
