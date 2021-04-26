import { useEffect } from "react"
import { useDispatch, useSelector } from "react-redux";
import Box from "@material-ui/core/Box";
import Filter from "./Filter";
import SearchResults from "./SearchResults";
import TopBar from "./TopBar";
import SearchSelector from "./SearchSelector"
import { loadFeed } from "../store/actionCreators";
import {
  searchTermSelector,
  searchTypeSelector,
  pageSelector,
} from "../store/selectors";

const App = () => {
  const dispatch = useDispatch();
  const page = useSelector(pageSelector);
  const searchTerm = useSelector(searchTermSelector);
  const searchType = useSelector(searchTypeSelector);

  useEffect(() => {
    dispatch(loadFeed(searchTerm, searchType, page))
  }, [dispatch, searchTerm, searchType, page]);

  return (
    <Box flex={1} display='flex' flexDirection='column' alignItems='center'>
      <TopBar />
      <Box
        flexDirection='column'
        width='100%'
        maxWidth={600}
        paddingTop={2}
        paddingRight={2}
        marginBottom={8}
        paddingLeft={2}>
        <Box paddingBottom={1}>
          <Filter />
        </Box>
        <SearchSelector />
        <SearchResults />
      </Box>
    </Box>
  );
};

export default App;
