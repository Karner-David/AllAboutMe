/* eslint-disable */

import React from 'react';
import "./TopCabInfoPage.css";
import sample_pic from "../../media/sample_pic.avif"

const TopCabInfoPage = ({title, information1, information2, img1, img2}) => {

    return (
        <div className="info-page-container">
            <div className="left-side-container">
                <h1>{title}</h1>
                <h2>University of Texas at Austin</h2>
                <div className="left-side-container-p-img">
                    <p>I'm currently a <b>Junior</b> majoring in <b>Computer Science</b>.
                       I am aiming to complete my <b>Bachelor's of Science</b> without interest in any additional post grad education.
                       Some courses I have taken in the past include: <b>Data Structures</b>, Computer Architecture, <b>Operating Systems</b>, <b>Software Engineering</b>, and Data Management.
                       Currently, I am taking <b>Algorithms and Complexity</b>, <b>Machine Learning 1</b>, and <b>Generative Visual Computing</b>. 
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
                <h2>Klein Collins Highschool</h2>
                <p>I am a Klein Collins graduate 🐯 of 2022. Some notable clubs I was in during my time were Latin Club, Spanish NHS, Mu Alpha Theta,
                   and Asian Culture and Appreciation Club. Thank you to my teachers like Mr. and Mrs. Drugan for giving me such great experiences and
                   for all the amazing friends I made throughout my 4 years.
                </p>
            </div>
        </div>
    )
}

export default TopCabInfoPage;