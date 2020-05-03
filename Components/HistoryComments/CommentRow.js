import React from "react";
const CommentRow = ({ index, data }) => {
  return (
    <div className="list-row history">
      <div className="timeline-icon comment">
        <i class="far fa-comment"></i>
      </div>
      <div className="row-title">
        <div className="person-info">
          <div className="image-container">
            <img src={`https://placeimg.com/100/100/people/${index}`} alt="" />
          </div>
          <div className="name">
            <span>{data.userName}</span>
            <span>{data.time}</span>
          </div>
        </div>
        <div className="action-title">
          <i class="far fa-comment"></i>
          {data.label}
        </div>
      </div>
      <div className="row-details">
        <p className="comment-paragraph">{data.comment}</p>
      </div>
    </div>
  );
};

export default CommentRow;
