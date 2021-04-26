import { useState, useEffect } from "react";
import List from "@material-ui/core/List";
import Box from "@material-ui/core/Box";
import CircularProgress from "@material-ui/core/CircularProgress";
import Typography from "@material-ui/core/Typography";
import FeedListItem from "./FeedListItem"
import fetchData from "../api/fetchData";
import useInfiniteScroll from "../hooks/useInfiniteScroll"

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

interface Props {
  searchTerm: string,
  searchType: string
}

const SearchResults: React.FC<Props> = ({ searchTerm, searchType }) => {
  const [feed, setFeed] = useState<Array<FeedDataObject>>([]);
  const [isFetching, setIsFetching] = useState(false)
  const [isLoading, setIsLoading] = useState(true)
  const [hasMore, setHasMore] = useState(true)
  const [isError, setIsError] = useState(false)
  const [page, setPage] = useState(0);

  const loadMoreItems = () => {
    setIsFetching(true)
    setPage((prevPageNumber) => prevPageNumber + 1)
    fetchData(searchTerm, searchType, page).then(({ results }) => {
      setFeed([...feed, ...results])
      setIsFetching(false)
      if (results.length < 10) {
        setHasMore(false)
      }
    }).catch(err => {
      console.log(err)
      setHasMore(true)
    })
  }

  const [lastElementRef] = useInfiniteScroll(
    loadMoreItems,
    isFetching
  );

  useEffect(() => {
    setIsLoading(true)
    setIsError(false)
    fetchData(searchTerm, searchType, 0).then(({ results }) => {
      setFeed(results)
      setIsLoading(false)
      if (results.length < 10) {
        setHasMore(false)
      }
    }).catch(err => {
      console.log(err)
      setIsError(true)
    })
  }, [searchTerm, searchType])

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
