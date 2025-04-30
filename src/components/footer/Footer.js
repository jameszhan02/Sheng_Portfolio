import CoolDivider from "../cooldivider/CoolDivider";
import "./Footer.css";

function Footer() {
  return (
    <div className="footer-wrapper">
      <CoolDivider />
      <div className="footer-content"></div>
      <CoolDivider />
      <div className="auth-info">
        Copyright © 2025 Sheng Zhan. All rights reserved.
      </div>
    </div>
  );
}

export default Footer;
