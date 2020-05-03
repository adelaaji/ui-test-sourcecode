export const historyReducer = (state, action) => {
  switch (action.type) {
    case "init_data":
      return { ...state, historyDataList: action.payload };

    case "updateFilter":
      return { ...state, filterType: action.payload };

    default:
      return state;
  }
};
