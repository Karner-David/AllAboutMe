import React from "react";
import "./MidCabInfoPage.css";

const MidCabInfoPage = ({title, arrOfMedia, isPhoto}) => {


    return(
        <div className='mid-cabinet-container'>
            <h1>{title}</h1>
            <div className='media-container'>
                {arrOfMedia.map((media, index) => (
                    <div key={index} className="media-item">
                        {isPhoto ? (
                            <img 
                                className={`photo ${media.isHorizontal ? 'hor' : 'ver'}`}
                                src={media.src}
                                alt={media.title} 
                            />
                        ) : (
                            <iframe 
                                className="video" 
                                width="100%" 
                                height="100%" 
                                src={media.src} 
                                title="Youtube video player"
                                frameBorder="0"
                                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                                referrerPolicy="strict-origin-when-cross-origin"
                                allowFullScreen
                            ></iframe>
                        )}
                        <p className="media-title">{media.title}</p>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default MidCabInfoPage;