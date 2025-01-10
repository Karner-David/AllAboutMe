import React, { Suspense } from 'react';
import { useParams } from 'react-router-dom';
import BackToHomeButton from '../BackToHomeButton/BackToHomeButton';
// import FolderLeftNav from '../FolderLeftNav/FolderLeftNav';
import LeftNav from '../LeftNav/LeftNav';
import TopCabInfoPage from '../TopCabinetInformationPage/TopCabInfoPage';
import "./DynamicPage.css";

const importMap = {
    TopCabinetFolders: {
      Interests: React.lazy(() => import("../../pages/TopCabinetFolders/InterestsPage/InterestsPage")),
      Clubs: React.lazy(() => import('../../pages/TopCabinetFolders/ClubsPage/ClubsPage')),
      Education: React.lazy(() => import('../../pages/TopCabinetFolders/EducationPage/EducationPage')),
      Me: React.lazy(() => import('../../pages/TopCabinetFolders/MePage/MePage')),
    },
    MidCabinetFolders: {
      Photos: React.lazy(() => import("../../pages/MidCabinetFolders/PhotosPage/PhotosPage")),
      Videos: React.lazy(() => import("../../pages/MidCabinetFolders/VideosPage/VideosPage")),
    },
    BotCabinetFolders: {}
  };

const folderNavMap = {
    TopCabinetFolders: ["Me", "Education", "Clubs", "Interests"],
    MidCabinetFolders: ["Photos", "Videos"],
    BotCabinetFolders: {}
}


function DynamicPage() {
    const { cabinetId, folderId } = useParams();

    const ComponentToRender = importMap[cabinetId]?.[folderId];
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
                <TopCabInfoPage title={folderId}/>
            </Suspense>
        </div>
    )
}

export default DynamicPage;
