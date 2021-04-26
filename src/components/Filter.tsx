import { ChangeEvent, KeyboardEvent, useState } from "react"
import InputAdornment from '@material-ui/core/InputAdornment';
import TextField from '@material-ui/core/TextField';
import SearchIcon from '@material-ui/icons/Search';

interface Props {
  onSearch: (term: string) => void,
}

const Filter: React.FC<Props> = ({ onSearch }) => {
  const [searchTerm, setSearchTerm] = useState<string>("")

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    setSearchTerm(e.target.value)
  };

  const handleKeypress = (e: KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter") {
      onSearch(searchTerm);
      setSearchTerm("")
    }
  };

  return (
    < >
      <TextField
        variant="outlined"
        fullWidth
        placeholder={`Search something`}
        value={searchTerm}
        onChange={handleChange}
        onKeyPress={handleKeypress}
        InputProps={{
          startAdornment: (
            <InputAdornment position="start">
              <SearchIcon />
            </InputAdornment>
          ),
        }}
      />
    </>
  )
};

export default Filter;
