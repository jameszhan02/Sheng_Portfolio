import { motion } from "motion/react";
import Footer from "../../components/footer/Footer";
import Navbar from "../../components/navbar/Navbar";
import Poster from "../../components/poster/poster";
import ExperienceSVG from "../../icons/ExpericenceSVG";
import "./Home.css";
//for animation -_- quick set up
import CoolButton from "../../components/coolbutton/CoolButton";
import joLogo from "../../images/Johome_logo.jpg";
import airTnlLogo from "../../images/airtnl_logo.jpg";
import canovo_home from "../../images/canovo_home.jpg";
import canovo_logo from "../../images/canovo_logo.jpg";
import JohomeProHome from "../../images/johomepro_home.jpg";
import JohomeProSplash from "../../images/johomepro_splash.jpg";
import manoir from "../../images/manoir.png";
import novaInteractionLogo from "../../images/nova_interactive_ltd_logo.jpg";
import newStreamHome from "../../images/nustream_home.jpg";
import newStreamLogo from "../../images/nustream_logo.jpg";
import navoaPJ1 from "../../images/pc1-scaled.jpg";
import peacefulMallIcon from "../../images/peacefulMall_icon.webp";
import peacefulMall_food_deliver from "../../images/peacefulmall_food_develiver.png";
import peacefulMallHomePage from "../../images/peacefulmall_homePage.png";
import projectOneCover from "../../images/project_cover_one.png";
import ArrowSVGIcon from "../../images/svg/ArrowSVG";

function Home() {
  //create ref for select element and highlight anime
  const NOTION_STUDY_URL =
    "https://www.notion.so/Study-About-All-8be1667835344d458745b9662ce19642";
  const PROTFOLOIO_BASE_URL = "/Sheng_Portfolio";
  return (
    <div className="home-container">
      <Navbar></Navbar>
      <div className="intro-section">
        <div className="intro-part">
          <div className="intro-part-col-left">
            <div className="my-name">I'm Sean</div>
            <div className="short-intro">
              Full-Stack Developer@NuStream
              <br />I work with React Ecosystem, TypeScript, and backend
              development. Thrive on tackling challenges, continuously expanding
              my skillset, and delivering innovative solutions in dynamic
              environments. Currently pursuing Data Science.
            </div>
            <div className="splash-nav-row">
              <CoolButton
                text="Dive In"
                href={`${PROTFOLOIO_BASE_URL}/#learn-how`}
              />
              <CoolButton
                text="More About Me"
                href={`${PROTFOLOIO_BASE_URL}/#learn-how`}
                disableCoolEffect
              />
            </div>
          </div>
          <div className="intro-part-col-right" />
        </div>
        <div className="intro-part-bg">
          <div className="intro-part-bg-inner">
            <div className="intro-part-bg-inner-col-left" />
            <div className="intro-part-bg-inner-col-right">
              <div className="poster-board">
                <motion.div
                  className="poster-board-col"
                  animate={{ y: ["0%", "-120%"] }}
                  transition={{
                    duration: 30,
                    repeat: Infinity,
                    repeatType: "reverse",
                    ease: "easeInOut",
                  }}
                >
                  <Poster
                    posterImgUrl={canovo_home}
                    avatorUrl={canovo_logo}
                    title="Canovo"
                  />
                  <Poster
                    posterImgUrl={newStreamHome}
                    avatorUrl={newStreamLogo}
                    title="NuStream Realty"
                  />
                  <Poster
                    posterImgUrl={peacefulMallHomePage}
                    avatorUrl={peacefulMallIcon}
                    title="Peaceful Mall"
                  />
                </motion.div>
                <motion.div
                  className="poster-board-col"
                  animate={{ y: ["-120%", "0%"] }}
                  transition={{
                    duration: 30,
                    repeat: Infinity,
                    repeatType: "reverse",
                    ease: "easeInOut",
                  }}
                >
                  <Poster
                    posterImgUrl={projectOneCover}
                    avatorUrl={airTnlLogo}
                    title="Air Teach And Learn"
                  />
                  <Poster
                    posterImgUrl={JohomeProSplash}
                    avatorUrl={joLogo}
                    title="JoHome"
                  />
                  <Poster
                    posterImgUrl={JohomeProHome}
                    avatorUrl={joLogo}
                    title="JoHomePro"
                  />
                </motion.div>
                <motion.div
                  className="poster-board-col"
                  animate={{ y: ["0%", "-120%"] }}
                  transition={{
                    duration: 30,
                    repeat: Infinity,
                    repeatType: "reverse",
                    ease: "easeInOut",
                  }}
                >
                  <Poster
                    posterImgUrl={peacefulMall_food_deliver}
                    avatorUrl={peacefulMallIcon}
                    title="PeaceFul Food Delivery"
                  />
                  <Poster
                    posterImgUrl={navoaPJ1}
                    avatorUrl={novaInteractionLogo}
                    title="Power Career"
                  />
                  <Poster
                    posterImgUrl={manoir}
                    avatorUrl={novaInteractionLogo}
                    title="Manoir"
                  />
                </motion.div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* End of intro gretting section */}
      <div className="intro-section-space " />
      <motion.div
        style={{
          display: "flex",
          justifyContent: "center",
        }}
        animate={{ y: [0, 10, 0] }}
        transition={{
          duration: 2,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      >
        <ArrowSVGIcon />
      </motion.div>
      <div className="experience-section">
        <div className="experience-title">
          <div className="experience-icon">
            <ExperienceSVG />
          </div>
          <div className="experience-title-txt">Experience</div>
        </div>
        <div className="experience-content">
          <div className="experience-content-date">JUNE 2022 — PRESENT</div>
          <div className="experience-content-detail">
            <div className="experience-content-detail-title">
              Full-Stack Developer
            </div>
            <div className="company-row">
              <div className="company-logo">
                <img src={newStreamLogo} alt="NuStream Realty" />
              </div>
              <div className="experience-content-detail-company">
                <a
                  href="https://www.nustreamrealty.com/"
                  target="_blank"
                  rel="noreferrer"
                >
                  NuStream Realty
                </a>
                <div className="company-location"> - Burnaby, BC, Canada</div>
              </div>
            </div>

            <div className="experience-content-detail-description">
              NuStream Realty is a tech-savvy real estate company that really
              shines with its unique tech edge. As one of Vancouver's biggest
              real estate players, we're all about creating services that make
              the economy stronger and transactions smoother. We want our agents
              to spend more time with their clients and less time on paperwork.
            </div>
            <div className="experience-content-detail-bullets">
              <ul>
                <li>
                  Developed and maintained a full-stack web application using
                  React, TypeScript, and Node.js.
                </li>
                <li>
                  Developed and maintained a full-stack web application using
                  React, TypeScript, and Node.js.
                </li>
                <li>
                  Developed and maintained a full-stack web application using
                  React, TypeScript, and Node.js.
                </li>
                <li>
                  Developed and maintained a full-stack web application using
                  React, TypeScript, and Node.js.
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      <br />
      <br />
      {/* End of contact me section */}
      <Footer></Footer>
    </div>
  );
}

export default Home;
