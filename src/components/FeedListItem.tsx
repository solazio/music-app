import ListItem from "@material-ui/core/ListItem";
import ListItemAvatar from "@material-ui/core/ListItemAvatar";
import ListItemText from "@material-ui/core/ListItemText";
import Avatar from "@material-ui/core/Avatar";
import ListItemSecondaryAction from "@material-ui/core/ListItemSecondaryAction";
import AudioPlayer from "./AudioPlayer";
import Grid from "@material-ui/core/Grid";
import { FeedDataObject } from "./SearchResults"

interface Props {
  entry: FeedDataObject,
  divider: boolean
}

const FeedListItem: React.FC<Props> = ({
  entry: { artworkUrl100, trackName, artistName, collectionName, previewUrl },
  divider
}) => {

  return (
    <ListItem divider={divider}>
      <Grid container spacing={1}>
        <Grid item xs={12} style={{ display: "flex" }}>
          <ListItemAvatar>
            <Avatar alt="" src={artworkUrl100} />
          </ListItemAvatar>
          <ListItemText primary={trackName} secondary={artistName}></ListItemText>
          <ListItemSecondaryAction style={{ top: "48px" }}>
            <ListItemText secondary={collectionName}></ListItemText>
          </ListItemSecondaryAction>
        </Grid>
        {previewUrl && (
          <Grid item xs={12}>
            <AudioPlayer previewUrl={previewUrl} />
          </Grid>
        )}
      </Grid>
    </ListItem>
  );
};

export default FeedListItem;
