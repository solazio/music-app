import { render, screen } from '@testing-library/react';
import App from './App';

describe("App", () => {
  it("should render the top bar", () => {
    render(<App />);
    const topBarEl = screen.getByText("Apple Music");
    expect(topBarEl).toBeInTheDocument();
  });
})
