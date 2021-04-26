import {
  LOAD_FEED_START,
  LOAD_FEED_SUCCESS,
  LOAD_FEED_ERROR,
  CHANGE_SEARCH_TERM,
  CHANGE_PAGE,
  CHANGE_HAS_MORE,
  CHANGE_SEARCH_TYPE,
} from "./actions";

import { getMusicData } from "../data/index";

const loadFeedStart = (searchType) => (dispatch) =>
  dispatch({
    type: LOAD_FEED_START,
    payload: { searchType },
  });

const loadFeedSuccess = (feed, offset) => (dispatch) => {
  if (feed.length < 10) {
    dispatch(changeHasMore(false));
  } else {
    dispatch(changeHasMore(true));
  }
  dispatch({
    type: LOAD_FEED_SUCCESS,
    payload: { feed, offset },
  });
}


const loadFeedError = (error) => (dispatch) =>
  dispatch({
    type: LOAD_FEED_ERROR,
    payload: { error },
  });

export const loadFeed = (term, searchType, offset) => async (dispatch) => {
  dispatch(loadFeedStart(searchType));
  try {
    const feed = await getMusicData(term, searchType, offset);
    dispatch(loadFeedSuccess(feed, offset));
  } catch (e) {
    dispatch(loadFeedError(e));
  }
};

export const changeSearchTerm = (searchTerm) => (dispatch) =>
  dispatch({
    type: CHANGE_SEARCH_TERM,
    payload: { searchTerm },
  });

export const changeHasMore = (hasMore) => (dispatch) =>
  dispatch({
    type: CHANGE_HAS_MORE,
    payload: { hasMore },
  });

export const changePage = (page) => (dispatch) =>
  dispatch({
    type: CHANGE_PAGE,
    payload: { page },
  });

export const changeSearchType = (searchType) => (dispatch) =>
  dispatch({
    type: CHANGE_SEARCH_TYPE,
    payload: { searchType },
  });


