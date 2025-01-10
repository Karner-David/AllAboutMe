import React from 'react';
import FolderLeftNav from '../FolderLeftNav/FolderLeftNav';
import "./LeftNav.css";
import { useNavigate } from 'react-router-dom';

function LeftNav({
        folderNames, chosenFolder, chosenCabinet
    }) {

    console.log(folderNames);
    const nav = useNavigate();

    function setChosen(curFolder, chosenFolder) {
        return curFolder === chosenFolder ? true : false;
    }

    const goToPage = (path) => {
        nav(path)
    }

    return(
        <div className='left-nav'>
            {folderNames.map((text) => (
                <FolderLeftNav 
                    key={text} 
                    text={text} 
                    isChosen={setChosen(text, chosenFolder)}
                    onClick={() => goToPage(`/${chosenCabinet}/${text}`)}
                    />
            ))}
        </div>
    )
}

export default LeftNav;