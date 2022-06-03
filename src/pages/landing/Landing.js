import { ProgressBar } from 'react-bootstrap';
import React, { useState, useEffect } from 'react';
import { useNavigate } from "react-router-dom";


import './Landing.css';

function Landing() {
    const [progressBar, setProgressBar] = useState(0);
    const navigate = useNavigate();
    useEffect(()=>{
        const timer = setTimeout(() => {
            setProgressBar(progressBar+2);
            if(progressBar > 130){
                clearTimeout(timer);
                navigate('/home');
            }
        }, 50);
    })

    return (
        <div className="landing-container">
            <div className="loader-txt">Sheng is Working</div>
            <ProgressBar variant="warning" style={{width:"300px"}} animated now={progressBar} />
        </div>
    )
}

export default Landing;