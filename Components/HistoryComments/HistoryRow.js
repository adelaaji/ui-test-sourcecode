import React from "react";
const HistoryRow = ({ index, data }) => {
  return (
    <div className={"list-row history" + ` ${data.type}`}>
      <div className="timeline-icon">
        <i className="dot text-color"></i>
      </div>
      <div className="row-title">
        <div className="person-info">
          <div className="image-container">
            <img
              src={`https://placeimg.com/100/100/people/${5 + index}`}
              alt=""
            />
          </div>
          <div className="name">
            <span>{data.userName}</span>
            <span>{data.time}</span>
          </div>
        </div>
        <div className="action-title">
          {renderHeadIcon(data.type)}
          {data.label}
        </div>
      </div>
      <div className="row-details">
        {data.dataList.length > 0 &&
          data.dataList.map((item) => (
            <p>
              {item.label} :<span>{item.from}</span>{" "}
              <i class="fas fa-arrow-right text-color"></i>
              <span> {item.to}</span>
            </p>
          ))}
      </div>
    </div>
  );
};

const renderHeadIcon = (action) => {
  if (action == "change") {
    return <i class="fas fa-exchange-alt text-color"></i>;
  } else if (action == "delete") {
    return <i class="far fa-trash-alt text-color"></i>;
  }
};
export default HistoryRow;
