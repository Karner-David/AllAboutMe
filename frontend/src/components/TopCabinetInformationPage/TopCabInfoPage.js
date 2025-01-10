import React from 'react';
import "./TopCabInfoPage.css";
import sample_pic from "../../images/sample_pic.avif"

const TopCabInfoPage = ({title, information1, information2, img1, img2}) => {

    return (
        <div className="info-page-container">
            <div className="left-side-container">
                <h1>{title}</h1>
                <div className="left-side-container-p-img">
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor 
                       incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud 
                       exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure 
                       dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. 
                       Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit
                       anim id est laborum.
                    </p>
                    <div className="left-side-container-img">
                        <img src={sample_pic} alt="sample pic" />
                    </div>
                </div>
            </div>
            <div className="right-side-container">
                <div className="right-side-container-img">
                    <img src={sample_pic} alt="sample pic" />
                </div>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor 
                    incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud 
                    exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure 
                    dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. 
                    Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit
                    anim id est laborum.
                </p>
            </div>
        </div>
    )
}

export default TopCabInfoPage;