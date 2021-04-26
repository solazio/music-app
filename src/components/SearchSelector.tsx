import { useMemo } from 'react';
import { useSelector, useDispatch } from 'react-redux'
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import AlbumIcon from '@material-ui/icons/Album';
import PersonIcon from '@material-ui/icons/Person';
import MusicNoteIcon from '@material-ui/icons/MusicNote';
import { changeSearchType } from "../store/actionCreators";
import { searchTypeSelector } from '../store/selectors';

const tabs = [
  {
    searchType: 'song',
    Icon: MusicNoteIcon,
    label: 'Songs',
  },
  {
    searchType: 'album',
    Icon: AlbumIcon,
    label: 'Albums',
  },
  {
    searchType: 'musicArtist',
    Icon: PersonIcon,
    label: 'Artists',
  },
];

const SearchSelector = () => {
  const dispatch = useDispatch();
  const searchType = useSelector(searchTypeSelector);
  const tabValue = useMemo(() => tabs.findIndex(tab => tab.searchType === searchType), [searchType]);


  const handleChange = (e: React.ChangeEvent<{}>, newValue: number) => {
    dispatch(changeSearchType(tabs[newValue].searchType));
  };

  return (
    <Tabs indicatorColor="primary" value={tabValue} onChange={handleChange} centered>
      {
        tabs.map(tab => (
          <Tab key={tab.label} icon={<tab.Icon />} label={tab.label} />
        ))
      }
    </Tabs>
  );
};

export default SearchSelector;
