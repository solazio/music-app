import { fireEvent, render } from '@testing-library/react';
import SearchSelector from './SearchSelector';

describe("SearchSelecetor", () => {
  const onSearchTypeChange = jest.fn();

  afterEach(() => {
    jest.clearAllMocks();
  });

  it("should render all 3 tabs", () => {
    const { getByText } = render(<SearchSelector searchType={"song"} onSearchTypeChange={onSearchTypeChange} />);

    expect(getByText("Songs")).toBeInTheDocument();
    expect(getByText("Albums")).toBeInTheDocument();
    expect(getByText("Artists")).toBeInTheDocument();
  });

  it("should have 1 tab selected and 2 not selected", () => {
    const { getAllByRole } = render(<SearchSelector searchType={"song"} onSearchTypeChange={onSearchTypeChange} />);

    expect(getAllByRole('tab', { selected: true }).length).toBe(1)
    expect(getAllByRole('tab', { selected: false }).length).toBe(2)
  });

  it("should call the callback function 1 time on click", () => {
    const { getAllByRole } = render(<SearchSelector searchType={"song"} onSearchTypeChange={onSearchTypeChange} />);

    fireEvent.click(getAllByRole('tab', { selected: false })[0])
    expect(onSearchTypeChange).toHaveBeenCalledTimes(1)
  });
})
