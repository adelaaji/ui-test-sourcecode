import React, { useContext, useState } from "react";
import ScrollArea from "react-scrollbar";
import { HistoryContext } from "../Context/HistoryContext";
import HistoryList from "./HistoryList";

const RightSideBar = () => {
  const [commentText, setCommentText] = useState("");
  const [isBtnEnable, setIsBtnEnable] = useState(true);
  const { dispatch, state, addComment } = useContext(HistoryContext);
  const filterData = (filterParams) => {
    dispatch({ type: "updateFilter", payload: filterParams });
  };
  const inputChange = (event) => {
    let inputValue = event.target.value;
    if (inputValue == "") {
      setIsBtnEnable(true);
    } else {
      setIsBtnEnable(false);
    }
    setCommentText(inputValue);
  };

  const addNewComment = () => {
    //console.log("add new comment  = ", commentText);
    addComment(commentText);
    setCommentText("");
    setIsBtnEnable(false);
  };
  return (
    <div className="right-sidebar">
      <div className="section-title">
        <h3>
          <span>History</span>
          <ul>
            <li
              onClick={() => filterData("history")}
              className={state.filterType == "history" ? "active" : ""}
            >
              History
            </li>
            <li
              onClick={() => filterData("comment")}
              className={state.filterType == "comment" ? "active" : ""}
            >
              Commment
            </li>
            <li
              onClick={() => filterData("none")}
              className={state.filterType == "none" ? "active" : ""}
            >
              History and Comment
            </li>
          </ul>
        </h3>
      </div>

      <div className="comment-form">
        <div className="form-container">
          <div className="image-container">
            <img src="https://placeimg.com/100/100/people/1" alt="" />
          </div>
          <input
            type="text"
            name="commentText"
            value={commentText}
            onChange={(e) => inputChange(e)}
            className="comment-control"
            placeholder="Add a comment"
          />
          <button
            className="comment-btn"
            disabled={isBtnEnable}
            onClick={() => addNewComment()}
          >
            Comment
          </button>
        </div>
      </div>

      <div className="history-comments-list">
        <ScrollArea
          speed={2}
          className="scrollable-area"
          contentClassName="scrollable-area-content"
          smoothScrolling={true}
          horizontal={false}
        >
          {state.historyDataList != null && (
            <HistoryList historyList={state.historyDataList} />
          )}
        </ScrollArea>
      </div>
    </div>
  );
};

export default RightSideBar;
