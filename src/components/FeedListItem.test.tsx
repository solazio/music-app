import { render } from '@testing-library/react';
import FeedListItem from './FeedListItem';

describe("FeedListItem", () => {
  const entry = {
    "kind": "song",
    "artistId": 909253,
    "trackId": 1469577741,
    "artistName": "Jack Johnson",
    "trackName": "Upside Down",
    "collectionName": "Jack Johnson and Friends: Sing-A-Longs and Lullabies for the Film Curious George",
    "previewUrl": "https://audio-ssl.itunes.apple.com/itunes-assets/AudioPreview123/v4/75/5a/fc/755afca1-d911-be2b-c0fb-f99d6d52ce1a/mzaf_4156076990936187406.plus.aac.p.m4a",
    "artworkUrl100": "https://is3-ssl.mzstatic.com/image/thumb/Music124/v4/b1/1d/2e/b11d2e7d-398b-2e7e-4847-1032d0ebad6a/source/100x100bb.jpg",
  }
  it("should render", () => {
    const { getByText } = render(<FeedListItem entry={entry} divider={false} />);

    expect(getByText(entry.trackName)).toBeInTheDocument();
  });

  it("should render the audio preview", () => {
    const { getByTestId } = render(<FeedListItem entry={entry} divider={false} />);

    expect(getByTestId("audio-controler")).toBeInTheDocument();
  });
})
