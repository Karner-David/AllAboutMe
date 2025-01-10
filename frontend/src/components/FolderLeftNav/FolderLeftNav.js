import React, { useState } from 'react';
import "./FolderLeftNav.css";

const FolderLeftNav = (
    { text, isChosen, onClick } ) => {

    const [hovered, setHovered] = useState(false);
    console.log('This is onclick' + onClick)

    return (
        <div 
            className={`folder-container ${hovered ? 'hovered' : ''} ${
            isChosen ? 'chosen' : ''
        }`}
            onMouseEnter={() => setHovered(true)}
            onMouseLeave={() => setHovered(false)}
            onClick={() => onClick(text)}
        >
            <h1>{text}</h1>
        </div>
    )
}

export default FolderLeftNav;