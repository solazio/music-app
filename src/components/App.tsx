import { useState } from "react"
import Box from "@material-ui/core/Box";
import Filter from "./Filter";
import SearchResults from "./SearchResults";
import TopBar from "./TopBar";
import SearchSelector from "./SearchSelector"

const App = () => {
  const [searchTerm, setSearchTerm] = useState("pink floyd")
  const [searchType, setSearchType] = useState("song")

  const handleSearch = (term: string) => {
    setSearchTerm(term)
  }

  const handleSearchTypeChange = (searchType: string) => {
    setSearchType(searchType)
  }

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
          <Filter onSearch={handleSearch} />
        </Box>
        <SearchSelector searchType={searchType} onSearchTypeChange={handleSearchTypeChange} />
        <SearchResults searchTerm={searchTerm} searchType={searchType} />
      </Box>
    </Box>
  );
};

export default App;
