import {
  LOAD_FEED_START,
  LOAD_FEED_SUCCESS,
  LOAD_FEED_ERROR,
  CHANGE_SEARCH_TERM,
  CHANGE_PAGE,
  CHANGE_HAS_MORE,
  CHANGE_SEARCH_TYPE
} from "./actions";

const initialState = {
  feed: [],
  searchType: "song",
  isLoading: true,
  hasMore: true,
  isError: false,
  searchTerm: "pink-floyd",
  page: 0
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case LOAD_FEED_START:
      return {
        ...state,
        searchType: action.payload.searchType,
        isLoading: true,
      };
    case LOAD_FEED_SUCCESS:
      return {
        ...state,
        feed: action.payload.offset === 0 ? action.payload.feed : [...state.feed, ...action.payload.feed],
        isLoading: false,
      };
    case LOAD_FEED_ERROR:
      return {
        ...state,
        isError: true,
      };
    case CHANGE_SEARCH_TERM:
      return {
        ...state,
        searchTerm: action.payload.searchTerm,
        page: 0,
      };
    case CHANGE_PAGE:
      return {
        ...state,
        page: action.payload.page,
      };
    case CHANGE_SEARCH_TYPE:
      return {
        ...state,
        searchType: action.payload.searchType,
        page: 0,
      };
    case CHANGE_HAS_MORE:
      return {
        ...state,
        hasMore: action.payload.hasMore,
      };
    default:
      return state;
  }
};

export default reducer;
