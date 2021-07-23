import React from 'react';
import './MainPhoto.scss'

const MainPhoto = (props) => {
    const { id, image, duration } = props.video;

    return (
        <div className="MainPhoto" key={id}>
            <img className="MainPhoto__pic" src={image} alt="Current video" />
            <p className="MainPhoto__timer">0:00/{duration}</p>
        </div>
    );
};

export default MainPhoto;