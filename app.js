import React from "react";
import ReactDOM from "react-dom";
import HistoryContextProvider from "./Context/HistoryContext";
import UpdateRecordModal from "./Components/UpdateRecordModal";
let container = document.getElementById("update-record-container");

ReactDOM.render(
  <HistoryContextProvider>
    <UpdateRecordModal />
  </HistoryContextProvider>,
  container
);
