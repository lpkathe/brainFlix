import React from 'react';
import './CommentList.scss'

const CommentList = (props) => {

  const { name, timestamp, comment } = props.data;

  return (
    <div className="comment">
      <div className="comment__pic"></div>
      <div className="comment__info">
        <div className="comment__info__firtsLine">
          <p className="comment__info__firtsLine__name">{name}</p>
          <p className="comment__info__firtsLine__date">{timestamp}</p>
        </div>
        <p className="comment__info__text">{comment}</p>
      </div>
    </div>
  )
}

export default CommentList;
