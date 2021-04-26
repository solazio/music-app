import { useSelector, useDispatch } from "react-redux";
import List from "@material-ui/core/List";
import Box from "@material-ui/core/Box";
import CircularProgress from "@material-ui/core/CircularProgress";
import Typography from "@material-ui/core/Typography";
import FeedListItem from "./FeedListItem"
import useInfiniteScroll from "../hooks/useInfiniteScroll"
import { changePage } from "../store/actionCreators";
import {
  feedSelector,
  isLoadingSelector,
  isErrorSelector,
  pageSelector,
  hasMoreSlector,
} from "../store/selectors";

export interface FeedDataObject {
  kind: string,
  trackId?: number,
  artistId?: number,
  artistName: string,
  collectionName: string,
  trackName: string,
  previewUrl: string,
  artworkUrl100: string,
}

const SearchResults = () => {
  const dispatch = useDispatch();
  const feed = useSelector(feedSelector);
  const isLoading = useSelector(isLoadingSelector);
  const isError = useSelector(isErrorSelector);
  const hasMore = useSelector(hasMoreSlector);
  const page = useSelector(pageSelector);

  const [lastElementRef] = useInfiniteScroll(
    () => {
      if (hasMore) {
        dispatch(changePage(page + 1))
      }
    },
    isLoading
  );

  if (isLoading) {
    if (isError) {
      return (
        <Box paddingTop={4}>
          <Typography variant='h6' align='center'>
            There was an error comunicating with the server. Please try again
            later.
          </Typography>
        </Box>
      );
    } else {
      return (
        <Box paddingTop={8} display='flex' justifyContent='center'>
          <CircularProgress />
        </Box>
      );
    }
  } else {
    if (feed.length > 0) {
      return (
        <>
          <List data-testid="feed-list">
            {feed.map((entry, count) => (
              <FeedListItem
                key={entry.trackId ? `${count}${entry.trackId}` : `${count}${entry.artistId}`}
                entry={entry}
                divider={count === feed.length - 1 ? false : true}
              />
            ))}
          </List>
          <div ref={hasMore ? lastElementRef : () => { }}></div>
          {!hasMore && <Typography variant='h6' align='center'>
            It seems you got to the end of it :).
          </Typography>}
        </>
      )
    } else {
      return (
        <Box paddingTop={4}>
          <Typography variant='h6' align='center'>
            Sorry, there are no results for your search.
          </Typography>
        </Box>
      )
    }
  }
};

export default SearchResults;
