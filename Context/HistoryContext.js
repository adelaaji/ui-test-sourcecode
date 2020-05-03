import React, { createContext, useReducer } from "react";
import { historyReducer } from "../Reducers/HistoryReducer";

export const HistoryContext = createContext();
const HistoryContextProvider = (props) => {
  const addComment = (commentText) => {
    let historyDataList = state.historyDataList;
    let todayData = historyDataList.find((day) => day.date == "Today");

    todayData.comments.push({
      userName: "Adel Aaji",
      label: "Comment has added",
      time: "14:40 pm",
      comment: commentText,
    });
    var index = historyDataList.findIndex((item) => item.date === "Today");
    historyDataList.splice(index, 1, todayData);
    dispatch({ type: "init_data", payload: historyDataList });
    localStorage.setItem("historyData", JSON.stringify(historyDataList));

    //dispatch()
  };
  const initData = { historyDataList: [], filterType: "none" };
  const [state, dispatch] = useReducer(historyReducer, initData);
  return (
    <HistoryContext.Provider value={{ state, dispatch, addComment }}>
      {props.children}
    </HistoryContext.Provider>
  );
};

export default HistoryContextProvider;
