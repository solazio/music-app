interface Props {
  previewUrl: string,
}

const AudioPlayer: React.FC<Props> = ({ previewUrl }) => (
  <audio controls style={{ width: "100%" }} data-testid="audio-controler">
    <source src={previewUrl} type="audio/mp4" />
    Your browser does not support the audio element.
  </audio>
);

export default AudioPlayer;
