import React from 'react';
import './MediaCard.scss';
import viewIcon from '../../assets/icons/Icon-views.svg';
import likesIcon from '../../assets/icons/Icon-likes.svg';

const MediaCard = (props) => {

    const { id, title, channel, views, likes, description } = props.video;

    return (
        <div className="video__description" key={id}>
            <h2 className="video__name">{title}</h2>
            <div className="video__contents">
                <div className="video__info">
                    <h3 className="video__info__author">By {channel}</h3>
                    <div className="video__info__date">12/18/2018</div>
                </div>
                <div className="video__socialInfo">
                    <div className="video__views">
                        <img className="video__icon" src={viewIcon} alt="Views Icon" />
                        <p className="video__counter">{views}</p>
                    </div>
                    <div className="video__likes">
                        <img className="video__icon" src={likesIcon} alt="Likes Icon" />
                        <p className="video__counter">{likes}</p>
                    </div>
                </div>
            </div>
            <div className="video__text">{description}</div>
        </div>
    );
};

export default MediaCard;