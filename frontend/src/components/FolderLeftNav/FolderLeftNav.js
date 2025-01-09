import React from 'react';
import "./FolderLeftNav.css";
import folderImg from "../../images/folder.png";

const FolderLeftNav = (
    { text, } ) => {
        return (
            <div className="folder-container">
                {/* <img src={folderImg} alt="folder png" /> */}
                <h1>{text}</h1>
            </div>
        )
    }

export default FolderLeftNav;