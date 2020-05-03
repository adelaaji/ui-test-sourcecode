import React, { useContext } from "react";
import HistoryRow from "./HistoryComments/HistoryRow";
import CommentRow from "./HistoryComments/CommentRow";
import { HistoryContext } from "../Context/HistoryContext";

const HistoryList = ({ historyList }) => {
  const { dispatch, state } = useContext(HistoryContext);
  return (
    <div className="list-container">
      {historyList.map((singleDay) => (
        <div className="day-container">
          <h4>{singleDay.date}</h4>
          <div className="day-history-list">
            {state.filterType !== "comment" &&
              singleDay.actions.length > 0 &&
              singleDay.actions.map((actionData, index) => (
                <HistoryRow
                  type="history"
                  action="change"
                  index={index}
                  data={actionData}
                />
              ))}

            {state.filterType !== "history" &&
              singleDay.comments.length > 0 &&
              singleDay.comments.map((comment, index) => (
                <CommentRow
                  type="history"
                  action="change"
                  index={index}
                  data={comment}
                />
              ))}
          </div>
        </div>
      ))}

      {/* <div className="day-container">
        <h4>23/11/2019</h4>
        <div className="day-history-list">
          <HistoryRow type="comment" action="comment" />
        </div>
      </div> */}
    </div>
  );
};

export default HistoryList;
