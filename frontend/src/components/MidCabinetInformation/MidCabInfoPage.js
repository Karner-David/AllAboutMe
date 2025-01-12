import React, { useState, useEffect } from "react";
import axios from 'axios';
import "./MidCabInfoPage.css";

const MidCabInfoPage = ({title, arrOfMedia, isPhoto}) => {
    const [media, setMedia] = useState([]);

    useEffect(() => {
        // get media data from backend
        axios.get('http://localhost:3000/api/media')
            .then((response) => {
                setMedia(response.data.filter(item => item.type === (isPhoto ? 'photo' : 'video')));
            })
            .catch((error) => console.error('Error fetching media:', error));
    }, [isPhoto]);

    return(
        <div className='mid-cabinet-container'>
            <h1>{title}</h1>
            <div className='media-container'>
                {media.map((item, index) => (
                    <div key={index} className="media-item">
                        {isPhoto ? (
                            <img 
                                className={`photo ${item.isHorizontal ? 'hor' : 'ver'}`}
                                src={`http://localhost:5000${item.url}`}
                                alt={item.title} 
                            />
                        ) : (
                            <iframe 
                                className="video" 
                                width="100%" 
                                height="100%" 
                                src={item.url} 
                                title="Youtube video player"
                                frameBorder="0"
                                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                                referrerPolicy="strict-origin-when-cross-origin"
                                allowFullScreen
                            ></iframe>
                        )}
                        <p className="media-title">{item.title}</p>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default MidCabInfoPage;