import React from "react";
const DealBlock = ({ type, status }) => {
  return (
    <div className="deal-block">
      <h3>
        <span>Sav-A Office Supplies</span>
        <i className="fas fa-minus-circle"></i>
      </h3>

      <div className="deal-content">
        <div className="deal-column">
          <h5>Company</h5>
          <p>Sav-A Office Supplies</p>
        </div>
        <div className="deal-column">
          <h5>Amount</h5>
          <p>5000</p>
        </div>
        <div className="deal-column">
          <h5>Status</h5>
          <span className={`status ${type}`}>{status}</span>
        </div>
        <div className="deal-column">
          <h5>Owner</h5>
          <p>Ahmad Khaled</p>
        </div>
      </div>
    </div>
  );
};

export default DealBlock;
