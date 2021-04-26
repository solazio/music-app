import { render } from '@testing-library/react';
import TopBar from './TopBar';

describe("TopBar", () => {
  it("should render", () => {
    const { getByText } = render(<TopBar />);

    expect(getByText(/Apple Music/)).toBeInTheDocument();
  });
})
