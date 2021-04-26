import { ChangeEvent, useCallback, useState } from "react"
import { useSelector, useDispatch } from 'react-redux'
import InputAdornment from '@material-ui/core/InputAdornment';
import TextField from '@material-ui/core/TextField';
import SearchIcon from '@material-ui/icons/Search';
import { changeSearchTerm } from "../store/actionCreators";
import { searchTermSelector } from '../store/selectors';
import debounce from 'lodash.debounce';

const Filter = () => {
  const dispatch = useDispatch();
  const searchTerm = useSelector(searchTermSelector);
  const [value, setValue] = useState(searchTerm);

  const handleSearch = useCallback(
    debounce((value: string) => {
      dispatch(changeSearchTerm(value));
    }, 500),
    []
  );

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    setValue(e.target.value);
    handleSearch(e.target.value)
  };

  return (
    < >
      <TextField
        variant="outlined"
        fullWidth
        placeholder={`Search something`}
        value={value}
        onChange={handleChange}
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
