import React, { useEffect, useContext } from "react";
import LeftSideBar from "./LeftSideBar";
import RightSideBar from "./RightSideBar";
import { HistoryContext } from "../Context/HistoryContext";
import { initData } from "../initData/data";

const UpdateRecordModal = () => {
  const { dispatch, state } = useContext(HistoryContext);

  useEffect(() => {
    let historyData = localStorage.getItem("historyData");
    if (historyData == null) {
      localStorage.setItem("historyData", JSON.stringify(initData));
      historyData = JSON.stringify(initData);
    }
    let payloadData = JSON.parse(historyData);
    dispatch({ type: "init_data", payload: payloadData });
  }, []);
  return (
    <React.Fragment>
      <div className="modal-overlay"></div>
      <div className="main-container">
        <div className="modal-container">
          <div className="modal-header">
            <div className="title-section">
              <h4>Doris Reynolds</h4>
              <ul className="breadcrumb">
                <li>
                  <a href="#">Contact</a>
                </li>
                <li>
                  <span>All Contacts</span>{" "}
                </li>
              </ul>
            </div>
            <div className="steps-section">
              <ul className="steps-list">
                <li>
                  <span className="done">Todo</span>
                </li>
                <li>
                  <span className="active">In Progress</span>
                </li>
                <li>
                  <span>Pending</span>
                </li>
                <li>
                  <span>Done</span>
                </li>
              </ul>
            </div>
            <div className="close-section">
              <a href="#" className="close-btn">
                <img src="images/close.svg" alt="close" />
              </a>
            </div>
          </div>
          <div className="modal-body">
            <div className="body-row">
              <LeftSideBar />
              <RightSideBar />
            </div>
          </div>
          <div className="modal-footer">
            <div className="btns-container">
              <button className="button delete">Delete</button>
              <button className="button cancel">Cancel</button>
              <button className="button save">Save</button>
            </div>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
};

export default UpdateRecordModal;
