import React from 'react';
import FolderLeftNav from '../FolderLeftNav/FolderLeftNav';
import "./LeftNav.css";

function LeftNav({
        folderNames,
    }) {

    console.log(folderNames);

    return(
        <div className='left-nav'>
            {folderNames.map((text) => (
                <FolderLeftNav key={text} text={text} />
            ))}
        </div>
    )
}

export default LeftNav;