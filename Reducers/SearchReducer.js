export const searchReducer = (state, action) => {
  switch (action.type) {
    case "init_searchform":
      return { ...state, searchInitData: action.payload };

    case "tickets_search":
      return { ...state, ticketsList: action.payload };

    case "loading_list": {
      return { ...state, loading_list: action.payload };
    }
    // case "REMOVE_BOOK":
    //   return state.filter(book => book.id !== action.id);

    default:
      return state;
  }
};
