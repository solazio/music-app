import { useMemo } from 'react';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import AlbumIcon from '@material-ui/icons/Album';
import PersonIcon from '@material-ui/icons/Person';
import MusicNoteIcon from '@material-ui/icons/MusicNote';

interface Props {
  searchType: string,
  onSearchTypeChange: (enity: string) => void
}

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

const SearchSelector: React.FC<Props> = ({ searchType, onSearchTypeChange }) => {
  const tabValue = useMemo(() => tabs.findIndex(tab => tab.searchType === searchType), [searchType]);

  const handleChange = (e: React.ChangeEvent<{}>, newValue: number) => {
    onSearchTypeChange(tabs[newValue].searchType)
  };

  return (
    <Tabs value={tabValue} onChange={handleChange} centered>
      {
        tabs.map(tab => (
          <Tab key={tab.label} icon={<tab.Icon />} label={tab.label} />
        ))
      }
    </Tabs>
  );
};

export default SearchSelector;
