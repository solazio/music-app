import { render, fireEvent } from '@testing-library/react';
import Filter from './Filter';

describe("Filter", () => {
  const onSearch = jest.fn();

  afterEach(() => {
    jest.clearAllMocks();
  });

  it("should render", () => {
    const { getByPlaceholderText } = render(<Filter onSearch={onSearch} />);

    expect(getByPlaceholderText("Search something")).toBeInTheDocument();
  });

  it("should change the search term", () => {
    const { getByPlaceholderText } = render(<Filter onSearch={onSearch} />);

    const input = getByPlaceholderText("Search something")
    fireEvent.change(input, { target: { value: "ava" } })
    expect(input.value).toBe("ava");
  });

  it("should call the callback function 1 time", () => {
    const { getByPlaceholderText } = render(<Filter onSearch={onSearch} />);

    const input = getByPlaceholderText("Search something")
    fireEvent.change(input, { target: { value: "ava" } })
    fireEvent.keyPress(input, { key: 'Enter', code: 13, charCode: 13 })
    expect(onSearch).toHaveBeenCalledTimes(1);
  });

  it("should clear the search after Enter key is pressed", () => {
    const { getByPlaceholderText } = render(<Filter onSearch={onSearch} />);

    const input = getByPlaceholderText("Search something")
    fireEvent.change(input, { target: { value: "ava" } })
    fireEvent.keyPress(input, { key: 'Enter', code: 13, charCode: 13 })
    expect(input.value).toBe("");
  });
})
