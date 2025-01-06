import React, { Suspense } from 'react';
import { useParams } from 'react-router-dom';
import BackToHomeButton from '../BackToHomeButton/BackToHomeButton';

const componentsMap = {
    TopCabinetFolders: {
      Interests: React.lazy(() => import("../../pages/TopCabinetFolders/InterestsPage/InterestsPage")),
      Clubs: React.lazy(() => import('../../pages/TopCabinetFolders/ClubsPage/ClubsPage')),
      // Add more dynamic imports here
    },
    // Add other cabinet mappings here
  };

function DynamicPage() {
    const { cabinetId, folderId } = useParams();

    const ComponentToRender = componentsMap[cabinetId]?.[folderId];
    if (!ComponentToRender) {
        return <h1>Folder not found</h1>;
    }

    return (
        <div>
            <BackToHomeButton/>
            <Suspense fallback={<div>Loading...</div>}>
                <ComponentToRender/>
            </Suspense>
        </div>
    )
}

export default DynamicPage;
