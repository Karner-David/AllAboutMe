import React, { useState, useEffect } from 'react';
import './HomePage.css';
import Spline from '@splinetool/react-spline';
import { useNavigate } from 'react-router-dom';

function HomePage() {
    const nav = useNavigate();
    const [zIndexState, setZIndexState] = useState('spline');

    const handleFolderClick = (cabinetId, folderId) => {
        console.log('Got to folder click');
        nav(`/${cabinetId}/${folderId}`);
    };

    // to fix react-spline bug where after routing to a separate page and coming back to spline,
    // the spline stops being interactive until cursor hovers out of spline then comes back
    useEffect(() => {
        const whiteScreenTimer = setTimeout(() => {
            setZIndexState('whiteScreen');

            const splineAgainTimer = setTimeout(() => {
                setZIndexState('splineAgain');
            }, 750); // white screen duration

            return () => clearTimeout(splineAgainTimer);
        }, 500); // initial Spline duration

        return () => clearTimeout(whiteScreenTimer);
    }, []);

    return (
        <div style={{ position: 'relative', width: '100vw', height: '100vh', overflow: 'hidden' }}>
            {/* white screen*/}
            <div
                style={{
                    position: 'absolute',
                    top: 0,
                    left: 0,
                    width: '100%',
                    height: '100%',
                    backgroundColor: 'white',
                    zIndex: zIndexState === 'whiteScreen' ? 10 : 0,
                    pointerEvents: zIndexState === 'whiteScreen' ? 'auto' : 'none', 
                }}
            />

            {/* spline component */}
            <Spline
                scene="https://prod.spline.design/jT6zWH-sCENwLHIW/scene.splinecode"
                onSplineMouseDown={(e) => {
                    console.log('Event object:', e);
                    console.log('Clicked target:', e.target);
                    console.log('Target name:', e.target?.name);

                    const topCabinetFolderNames = ['Interests', 'Clubs', 'Education', 'Me'];
                    const midCabinetFolderNames = ['Photos', 'Videos'];
                    const botCabinetFolderNames = [];

                    if (topCabinetFolderNames.includes(e.target.name)) {
                        handleFolderClick('TopCabinetFolders', e.target.name);
                    } else if (midCabinetFolderNames.includes(e.target.name)) {
                        handleFolderClick('MidCabinetFolders', e.target.name);
                    } else if (botCabinetFolderNames.includes(e.target.name)) {
                        handleFolderClick('BotCabinetFolders', e.target.name);
                    }
                }}
                style={{
                    position: 'absolute',
                    top: 0,
                    left: 0,
                    width: '100%',
                    height: '100%',
                    zIndex: zIndexState === 'spline' || zIndexState === 'splineAgain' ? 10 : 0, 
                }}
            />
        </div>
    );
}

export default HomePage;
