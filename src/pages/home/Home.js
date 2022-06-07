import Navbar from '../../components/navbar/Navbar';
import Footer from '../../components/footer/Footer';
import './Home.css';
import Typical from 'react-typical';

//for animation -_- quick set up
import Aos from "aos";
import "aos/dist/aos.css";
import { useEffect } from 'react';


function Home() {
    useEffect(()=>{
        Aos.init({
            duration: 2000,
            once: true
        });
    })
    return (
        <div className="home-container">
            <Navbar></Navbar>
            <div className='intro-section'>
                 <div className="mobile-chalk-txt"/>
                <div className='avator-card'>
                    <div className="chalk-txt"/>
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
                                <p>💙💛No Fee was required at the end, since support Ukrine Local Business💙💛.</p>
                                <p>---------------------</p>
                                <a className="highlight-content" href="https://gocerdaria.com.ua/" target="_blank">
                                    <div>Go Daria Gocer</div>
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
            <Footer></Footer>
        </div>
    )
}

export default Home;