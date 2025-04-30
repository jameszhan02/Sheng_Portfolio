import DocumentSVG from "../../icons/DocumentSVG";
import EmailSVG from "../../icons/EmailSVG";
import GithubSVG from "../../icons/GithubSVG";
import LinkedInSVG from "../../icons/LinkedInSVG";
import CoolDivider from "../cooldivider/CoolDivider";
import "./Footer.css";

function Footer() {
  return (
    <div className="footer-wrapper">
      <CoolDivider />
      <div className="footer-content">
        <div className="footer-content-col">
          <div className="footer-content-col-title">Sean Zhan</div>
          <div className="footer-content-col-intro">
            Software Engineer | Crafting Code, Exploring Data, and Designing
            Interactive Experiences
          </div>
          <div className="links">
            <div className="link-item">
              <a
                href="mailto:Jameszhan02@hotmail.com"
                target="_blank"
                rel="noreferrer"
              >
                <EmailSVG color="#f5f5f5" />
                <span className="tooltip">Email</span>
              </a>
            </div>
            <div className="link-item">
              <a
                href="https://github.com/jameszhan02"
                target="_blank"
                rel="noreferrer"
              >
                <GithubSVG color="#f5f5f5" />
                <span className="tooltip">GitHub</span>
              </a>
            </div>
            <div className="link-item">
              <a
                href="https://www.linkedin.com/in/sheng-zhan-495985240/"
                target="_blank"
                rel="noreferrer"
              >
                <LinkedInSVG color="#f5f5f5" />
                <span className="tooltip">LinkedIn</span>
              </a>
            </div>
            <div className="link-item">
              <a
                href="https://drive.google.com/file/d/1mXSWgenWLSN3TNh-b8xjKjAt-cwHmMIN/view?usp=drive_link"
                target="_blank"
                rel="noreferrer"
              >
                <DocumentSVG color="#f5f5f5" />
                <span className="tooltip">Resume</span>
              </a>
            </div>
          </div>
        </div>
        <div className="footer-content-main-col"></div>
        <div className="footer-content-col"></div>
      </div>
      <CoolDivider />
      <div className="auth-info">
        Copyright © 2025 Sheng Zhan. All rights reserved.
      </div>
    </div>
  );
}

export default Footer;
