import Navbar from '../../components/navbar/Navbar';
import './Home.css';
import Typical from 'react-typical';

function Home() {
    return (
        <div className="home-container">
            <Navbar></Navbar>
            <div className='intro-section'>
                <div className='avator-card'>
                <div className="chalk-txt">
                </div>
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
                <div className='project-case'>
                    <div></div>
                </div>
            </div>
        </div>
    )
}

export default Home;