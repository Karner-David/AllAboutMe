import React from 'react';
import { useNavigate } from 'react-router-dom';


function BackToHomeButton() {
    const nav = useNavigate();

    const goToHomePage = () => {
        nav('/');
    }
    return(
        <button onClick={goToHomePage}>Back To Home</button>
    )
}

export default BackToHomeButton;