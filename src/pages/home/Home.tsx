import { motion } from "motion/react";
import Footer from "../../components/footer/Footer";
import Navbar from "../../components/navbar/Navbar";
import Poster from "../../components/poster/poster";
import ExperienceSVG from "../../icons/ExpericenceSVG";
import "./Home.css";
//for animation -_- quick set up
import confetti from "canvas-confetti";
import CoolButton from "../../components/coolbutton/CoolButton";
import ExperienceItem, {
  ExperienceItemProps,
} from "../../components/experienceitem/ExperienceItem";
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

  //experience items
  const experiences: ExperienceItemProps[] = [
    {
      workDuration: "JUNE 2022 — PRESENT",
      title: "Full-Stack Developer",
      company: "NuStream Realty",
      companyLink: "https://www.nustreamrealty.com/",
      description: `NuStream Realty is a tech-savvy real estate company that really shines with its unique tech edge. As one of Vancouver's biggest
              real estate players, we're all about creating services that make
              the economy stronger and transactions smoother. We want our agents
              to spend more time with their clients and less time on paperwork.`,
      workDetail: [
        "Implemented alert mechanisms for backend APIs and advocated for an on-call system within the team. This approach uses multiple metrics as standards, including average API response time, error rates, third-party service status, server performance, and overall service health. These improvements significantly reduced app downtime and enhanced user experience.",
        "Redesigned the Java API architecture by advocating for and implementing Redis caching and asynchronous job processing. This strategic enhancement significantly reduced API response times and decreased server costs by $5,000 annually.",
        "Maintained CI/CD pipelines using GitHub Actions, ensuring 99.9% deployment success rate, automating most of the manual deployment process.",
        "Rapidly mastered Android development, delivering a production-ready feature within a month despite no prior experience, demonstrating adaptability and strong problem-solving skills.",
        "Automated accounting workflows by replacing manual data entry with E2E testing tools, saving the department 15+ hours per week and reducing data entry errors.",
        "Identified and addressed performance bottlenecks, implementing targeted indexing strategies and optimizing data filtering. Successfully reduced a 7-second search to under 1 second, significantly enhancing efficiency.",
        "Mentored interns, conducting code reviews for each pull request to ensure high code quality.",
      ],
      location: "Burnaby, BC, Canada",
      logo: newStreamLogo,
    },
    {
      workDuration: "DEC 2021 — May 2022",
      title: "Front-End Developer",
      company: "Peaceful Mall",
      companyLink: "https://www.peacefulmall.com/en",
      description:
        "Peaceful Mall is a comprehensive platform offering a wide range of services, including e-commerce and food delivery. Our mission is to provide users with more convenient services and efficient delivery options.",
      workDetail: [
        "Implemented a payment interface utilizing an event queue to ensure quick response times and data consistency. This setup guarantees that any failure at any step triggers a rollback of changes.",
        "Refactored a large portion of the existing project code using React Native best practices, significantly improving app performance by preventing excessive re-render issues.",
        "Developed 10+ reusable UI components in collaboration with the design team, ensuring consistent branding and 100% responsiveness across 5+ device types/size.",
        "Redesigned state management with Redux and Context API, reducing API calls and improving app stability.",
        "Debugged and optimized UI performance, identifying rendering bottlenecks using React DevTools and Chrome Performance Profiler.",
        "Well-versed in Agile and Iterative SDLC methodologies. Used Asana for project tracking and sprint management, enhancing team collaboration. Maintained clear documentation in Notion, making technical information easily accessible.",
      ],
      location: "Vancouver, BC, Canada",
      logo: peacefulMallIcon,
    },
    {
      workDuration: "JAN 2021 — DEC 2021",
      title: "Full-Stack Developer",
      company: "Nova Interaction",
      companyLink: "https://no-va.ca/",
      description:
        "Nova Interaction is a software development consultancy. The dynamic work environment and rigorous code reviews have provided a strong foundation for my career. Engaging directly with clients has enhanced my communication and requirements analysis skills.",
      workDetail: [
        "Developed and deployed 3 full-stack web applications, using React, Node.js, and PostgreSQL, delivering projects ahead of schedule while ensuring 100% uptime post-launch.",
        "Troubleshoot and resolve critical backend API issues, and improving system stability through log monitoring and automated testing",
      ],
      location: "Richmond, BC, Canada",
      logo: novaInteractionLogo,
    },
  ];

  const handleMouseEnter = () => {
    confetti({
      particleCount: 15, // Reduce the number of particles
      spread: 15, // Adjust spread for a tighter effect
      origin: { x: 0.5, y: 0.6 }, // Center horizontally
      scalar: 0.7, // Scale down the size of the particles
    });
  };

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
          <motion.div
            onMouseEnter={handleMouseEnter}
            className="experience-icon"
          >
            <ExperienceSVG />
          </motion.div>
          <div className="experience-title-txt">Experience</div>
        </div>
        {experiences.map((experience) => (
          <ExperienceItem key={experience.workDuration} {...experience} />
        ))}
      </div>
      <br />
      <br />
      {/* End of contact me section */}
      <Footer></Footer>
    </div>
  );
}

export default Home;
