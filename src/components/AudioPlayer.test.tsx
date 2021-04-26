import { render } from '@testing-library/react';
import AudioPlayer from './AudioPlayer';

describe("AudioPlayer", () => {
  it("should render", () => {
    const { getByTestId } = render(<AudioPlayer previewUrl={"someUrl"} />);

    expect(getByTestId("audio-controler")).toBeInTheDocument();
  });
})
