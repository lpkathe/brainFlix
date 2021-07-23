import React from 'react';
import './MediaList.scss'
import { Link } from "react-router-dom";


const MediaList = (props) => {
    const { data } = props;

    return (
        data && data.map(video => {
            const { id, image, title, channel } = video;

            return (
                <Link to={`/home/${id}`} className="suggestions__box" key={id} >
                    <img className="suggestions__box__video" src={image} alt="Video suggest" />
                    <div className="suggestions__box__info">
                        <p className="suggestions__box__info__name" >{title}</p>
                        <p className="suggestions__box__info__author" >{channel}</p>
                    </div>
                </Link>
            );
        })
    );
};

export default MediaList;