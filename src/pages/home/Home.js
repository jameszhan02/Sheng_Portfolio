import Navbar from '../../components/navbar/Navbar';
import Footer from '../../components/footer/Footer';
import './Home.css';
import Typical from 'react-typical';

//for animation -_- quick set up
import Aos from "aos";
import "aos/dist/aos.css";
import { useEffect, useRef } from 'react';

//for tag cloud import
import TagCloud from 'TagCloud';


function Home() {
    //create ref for select element and highlight anime
    const highlightRef = useRef(null);

    // control work experience show/display and hidden
    const titleOne = useRef(null);
    const titleTwo = useRef(null);
    const titleThree = useRef(null);
    const titleFour = useRef(null);

    const workDesc1 = useRef(null);
    const workDesc2 = useRef(null);
    const workDesc3 = useRef(null);
    const workDesc4 = useRef(null);


    const highlightMe = (e) => {
        //clean up other colors
        titleOne.current.style.color = "rgb(187, 187, 187)";
        titleTwo.current.style.color = "rgb(187, 187, 187)";
        titleThree.current.style.color = "rgb(187, 187, 187)";
        titleFour.current.style.color = "rgb(187, 187, 187)";
        // ---
        highlightRef.current.style.top = e.currentTarget.offsetTop + "px";
        highlightRef.current.style.height = e.currentTarget.offsetHeight + "px";
        e.currentTarget.style.color = "#ffc107";

        //show/hide content
        switch(e.currentTarget.id){
            case 'work1':
                console.log(workDesc1.current.className);
                workDesc1.current.className = "experience";
                workDesc2.current.className = "experience hidden-flag";
                workDesc3.current.className = "experience hidden-flag";
                workDesc4.current.className = "experience hidden-flag";
                break;
            case 'work2':
                workDesc1.current.className = "experience hidden-flag";
                workDesc2.current.className = "experience";
                workDesc3.current.className = "experience hidden-flag";
                workDesc4.current.className = "experience hidden-flag";
                break;
            case 'work3':
                workDesc1.current.className = "experience hidden-flag";
                workDesc2.current.className = "experience hidden-flag";
                workDesc3.current.className = "experience";
                workDesc4.current.className = "experience hidden-flag";
                break;
            case 'work4':
                workDesc1.current.className = "experience hidden-flag";
                workDesc2.current.className = "experience hidden-flag";
                workDesc3.current.className = "experience hidden-flag";
                workDesc4.current.className = "experience";
                break;
        }
    }

    //------------------------------------
    const cloudContainerId = ".skill-right";
    const cloudTxt = ['Node', 'Java', 'React', 'React Native', 'Angular', 'Flutter', 'Vue', 'Database Design', 'Express', 'CSS', 'HTML', 'JavaScript'];
    const cloudOptions = {
        radius: 300,
        maxSpeed: 'nomal',
        initSpeed: 'nomal',
        direction: 135,
        keep: true
    };

    useEffect(() => {
        console.log('use effect fire once!');
        Aos.init({
            duration: 2000,
            once: true
        });
        const cloud = TagCloud(cloudContainerId, cloudTxt, cloudOptions);
        titleOne.current.style.color = "#ffc107";
        return () => {
            cloud.destroy();
        };
    }, [])
    return (
        <div className="home-container">
            <Navbar></Navbar>
            <div className='intro-section'>
                <div className="mobile-chalk-txt" />
                <div className='avator-card'>
                    <div className="chalk-txt" />
                    <div className='the-card'>
                        <div className="card-front"></div>
                        <div className="card-back"></div>
                    </div>
                </div>
                <div className="greeting-txt">
                    <div className="welcome-txt">Nice to meet you here!</div>
                    <div className="name-txt">I am Sheng Zhan,</div>
                    <Typical
                        className="ani-txt"
                        loop={1}
                        wrapper="b"
                        steps={[
                            'React Native Developer',
                            2000,
                            'Full Stack Web Developer',
                            3000,
                        ]}
                    />
                </div>
            </div>
            {/* End of intro gretting section */}
            <div className="projects-sections">
                <div className='section-title'>Projects</div>
                <div data-aos="fade-in" className='project-case'>
                    <div className="case-left project-cover-one case-lower-layer case-image">
                    </div>
                    <div className="case-right case-higher-layer case-content">
                        <div className="project-content  txt-right">
                            <div className='project-feature'>
                                Web Application
                            </div>
                            <div className="project-title">
                                Air Teach And Learn
                            </div>
                            <div className="project-desc">
                                A Online Teaching platform built by Angular and Firebase, With features like Searhing Classes, Online Payment, and Scheduling System etc.
                                <p>---------------------</p>
                                <a className="highlight-content" href="https://www.airtnl.com">
                                    <div>  Available on AirTnl</div>
                                </a>
                            </div>
                            <div className="project-stack">
                                Node <div>|</div> Firebase <div>|</div> Angular
                            </div>
                        </div>
                    </div>
                </div>
                {/* End of project One Case */}
                <div data-aos="fade-in" className='project-case'>
                    <div className="case-right project-cover-two case-lower-layer case-image">
                    </div>
                    <div className="case-left case-higher-layer case-content">
                        <div className="project-content">
                            <div className='project-feature'>
                                Mobile Application
                            </div>
                            <div className="project-title">
                                PeaceFul Mall
                            </div>
                            <div className="project-desc">
                                A Food Delivery platform power by React Native, have complete promotion and payment System, also driver managing system. Available on both App Store and Google Play Store.
                                <p>---------------------</p>
                                <a className="highlight-content" href="https://play.google.com/store/apps/details?id=com.peacefulmall.app&gl=US">
                                    <div> Peaceful Mall </div>
                                </a>
                            </div>
                            <div className="project-stack">
                                React Native <div>|</div> Node <div>|</div> PHP <div>|</div> Redux
                            </div>
                        </div>
                    </div>
                </div>
                {/* End of project Two Case */}
                <div data-aos="fade-in" className='project-case'>
                    <div className="case-left project-cover-three case-lower-layer case-image">
                    </div>
                    <div className="case-right case-higher-layer case-content">
                        <div className="project-content  txt-right">
                            <div className='project-feature'>
                                Personal Website
                            </div>
                            <div className="project-title">
                                Daria Gocer
                            </div>
                            <div className="project-desc">
                                A personal Website built for a psychiatrist from Ukraine. Patient are free to sent her email through the website, and to view all information about her, Google Map was also be used.
                                <p>????????No Fee was required at the end, since support Ukrine Local Business????????.</p>
                                <p>---------------------</p>
                                <a className="highlight-content" href="https://gocerdaria.com.ua/" target="_blank">
                                    <div>Visit Daria Gocer</div>
                                </a>
                            </div>
                            <div className="project-stack">
                                React <div>|</div> Firebase <div>|</div> Google Map
                            </div>
                        </div>
                    </div>
                </div>
                {/* End of project Three Case */}
            </div>
            {/* End of projects section */}
            <div data-aos="fade-in" className="skill-section">
                <div className='section-title'>All About Me</div>
                <div className='skill-section-row'>
                    <div className="skill-left">
                        <div>
                            <p>I enjoy createing things that live on the internet since my college time, after graduate I set a goal for myself to grow up and become a Full-Stack developer in a near futrue. </p>
                            <p>Fast-forward to today, and I have had the privilege of working at a start-up, and a medium-sized corporation. My main focus these days is Front End Developing, implement well-design UI and new functions to the applications.</p>
                            <p>Time to time, my friends and I also doing some projects for small businesses who need a website or Application to support for their works.</p>
                        </div>
                    </div>
                    <div id="tag-cloud" className="skill-right">

                    </div>
                </div>
            </div>
            {/* End of introduce myself and skill section */}
            <div data-aos="fade-in" className="works-section">
                <div className='section-title'>Where I've Worked</div>
                <div className='works-container'>
                    <div className='works-list'>
                        <div id='high-light' ref={highlightRef}></div>
                        <div id="work1" onClick={highlightMe} ref={titleOne} className='work-title'>
                            Nu Stream Realty
                        </div>
                        <div id="work2" onClick={highlightMe} ref={titleTwo} className='work-title'>
                            Peaceful Mall
                        </div>
                        <div id="work3" onClick={highlightMe} ref={titleThree} className='work-title'>
                            AirTnL
                        </div>
                        <div id="work4" onClick={highlightMe} ref={titleFour} className='work-title'>
                            RunTong IOT
                            {/* Java Developer Co-op <div>@Run Tong IOT Inc.</div> */}
                        </div>
                    </div>
                    <div className='works-content'>
                        <div className='experience' ref={workDesc1}>
                            <div className='experience-title'>
                               Front End Developer <div>@ Nu Stream Realty Inc.</div>
                            </div>
                            <div className='time-line'>
                                June 2022 - Present
                            </div>
                            <div className='work-detail'>
                            <p> - Communicate with multi-disciplinary teams of engineers, designers, producers, and clients on a daily basis.</p>
                            <p> - Develop and maintain code for 'JoHome' website and mobile application primarily using React.js, Java, mySql and flutter.</p>
                            </div>
                        </div>
                        <div  className='experience hidden-flag' ref={workDesc2}>
                            <div className='experience-title'>
                                Front End Developer <div>@ Peaceful Mall Media Inc.</div>
                            </div>
                            <div className='time-line'>
                                Dec 2021 - May 2022
                            </div>
                            <div className='work-detail'>
                                <p>- Collaborated with a UI/UX desingers, to deveoped Mobile Application 'Peaceful Mall', which widely use in Vancouver for online food ording.</p>
                                <p>- RestFull APIs developed with basic CRUD functions.</p>
                                <p>- Worked with different Front End Framework, such as React Native, flutter, React and Vue.js.</p>
                                <p>- Wroten modern, performant, maintainable code for project.</p>
                            </div>
                        </div>
                        <div className='experience hidden-flag' ref={workDesc3}>
                            <div className='experience-title'>
                                Full-Stack Web Developer <div>@ Air Teach and Learn Inc.</div>
                            </div>
                            <div className='time-line'>
                                January  - Dec 2021
                            </div>
                            <div className='work-detail'>
                            <p> - Developded online teaching platform web applications for AirTnl using Angular/Firebase</p>
                            <p> - Architected and implemented scheduling system in the application, which allow teachers choose their own available time to host their classes </p>
                               
                            </div>
                        </div>
                        <div className='experience hidden-flag' ref={workDesc4}>
                            <div className='experience-title'>
                               Java Developer Co-op <div>@ RunTong IOT Inc.</div>
                            </div>
                            <div className='time-line'>
                                May - Dec 2019
                            </div>
                            <div className='work-detail'>
                                <p> -  Worked on different projects that involve the usage of modern Full Stack Technologies such as Node.js, Express, MongoDB, mySQL, React and Java Spring Boot</p>
                                <p> -  Got familiar with web application development process, and porgrammers' working environment. </p>
                                <p> -  Corporated with others as a team </p>
                                <p> -  Manually tested sites in various browsers and mobile devices to ensure cross-browser compatibility and responsiveness</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {/* End of Work Experience section */}
            <div data-aos="fade-in" className="contact-section">
                <div className="contact-title">
                    Get In Touch
                </div>
                <div className="contact-content">
                    Interesting in about me??? No problems, let's getting in touch with e-mail, I will get back to you as soon as possible.
                </div>
                <div className='contact-btn'>
                    Say Hi!
                </div>
            </div>
            {/* End of contact me section */}
            <Footer></Footer>
        </div>
    )
}

export default Home;