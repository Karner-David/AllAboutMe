import React from 'react';
import { useNavigate } from 'react-router-dom';
import backArrowImg from '../../media/back_arrow.webp';
import './BackToHomeButton.css';


function BackToHomeButton() {
    const nav = useNavigate();

    const goToHomePage = () => {
        nav('/');
    }
    return(
        <div className="button-container">
            <img id="back-button" src={backArrowImg} alt="back arrow" onClick={goToHomePage} />
        </div>
    )
}

export default BackToHomeButton;