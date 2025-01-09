import React from 'react';
import { useNavigate } from 'react-router-dom';


function BackToHomeButton() {
    const nav = useNavigate();

    const goToHomePage = () => {
        nav('/');
    }
    return(
        <div className="button-container">
            <button className="button" onClick={goToHomePage}>Back To Home</button>
        </div>
    )
}

export default BackToHomeButton;