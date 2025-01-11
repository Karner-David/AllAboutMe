import React, { Suspense } from 'react';
import { useParams } from 'react-router-dom';
import BackToHomeButton from '../BackToHomeButton/BackToHomeButton';
// import FolderLeftNav from '../FolderLeftNav/FolderLeftNav';
import LeftNav from '../LeftNav/LeftNav';
import TopCabInfoPage from '../TopCabinetInformation/TopCabInfoPage';
import MidCabInfoPage from '../MidCabinetInformation/MidCabInfoPage';
import "./DynamicPage.css";

const importMap = {
    TopCabinetFolders:  React.lazy(() => import('../TopCabinetInformation/TopCabInfoPage')),
    MidCabinetFolders: React.lazy(() => import('../MidCabinetInformation/MidCabInfoPage')),
    BotCabinetFolders: {}
  };

const folderNavMap = {
    TopCabinetFolders: ["Me", "Education", "Clubs", "Interests"],
    MidCabinetFolders: ["Photos", "Videos"],
    BotCabinetFolders: {}
}

const sample_photos = [
    { id: 1, src: "/postedImages/Austin River 1 Hor.png", title: "austin river 1", isHorizontal: true},
    { id: 2, src: "/postedImages/Austin River 1 Ver.png", title: "austin river 1", isHorizontal: false},
    { id: 3, src: "/postedImages/Dad on Road Hor.png", title: "dad on road night time", isHorizontal: true},
    { id: 4, src: "/postedImages/Gas Station Guy Ver.png", title: "gas station guy", isHorizontal: false},
    { id: 5, src: "/postedImages/Roger Thinking Ver.png", title: "roger thinking", isHorizontal: false},
    { id: 6, src: "/postedImages/Sunset Hor.jpg", title: "sunset horizon", isHorizontal: true},
    { id: 7, src: "/postedImages/Sunset Rays Hor.png", title: "sunset rays", isHorizontal: true},
    { id: 8, src: "/postedImages/Sus Cult Lamp Hor.png", title: "sus cult lamp", isHorizontal: true},
    { id: 9, src: "/postedImages/UFCU Ver.png", title: "UFCU", isHorizontal: false},
];

const sample_videos = [
    { id: 1, src: "https://www.youtube.com/embed/iykJL00HmQ0?si=v2B4ZJEi-M3Sk_lJ", title: "Philippines 2023"},
    { id: 2, src: "https://www.youtube.com/embed/nMzN8oeAccU?si=o4Moq96wik4zgrfr", title: "[Frieren] | Down With Me - Lil Tecca"},
    { id: 3, src: "https://www.youtube.com/embed/ORnxApYCO6o?si=wRcX-YS9_suot1KE", title: "Clips 1 | [QTip] Namou"},
]


function DynamicPage() {
    const { cabinetId, folderId } = useParams();

    const ComponentToRender = importMap[cabinetId];
    if (!ComponentToRender) {
        return <h1>Folder not found</h1>;
    }

    return (
        <div className="folder-page-container">
            <div className="left-nav-bar">
                <BackToHomeButton/>
                <LeftNav folderNames={folderNavMap[cabinetId]}
                         chosenFolder={folderId}
                         chosenCabinet={cabinetId}
                />
            </div>
            <Suspense fallback={<div>Loading...</div>}>
                {/* <TopCabInfoPage title={folderId}></TopCabInfoPage> */}
                <ComponentToRender 
                    title={folderId}
                    arrOfMedia={sample_photos}
                    isPhoto={true}
                />
            </Suspense>
        </div>
    )
}

export default DynamicPage;
