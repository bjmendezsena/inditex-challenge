import { screen } from "@testing-library/react";

import { render } from "../../../test-utils";
import { Card, CardProps } from "./Card";
import userEvent from "@testing-library/user-event";

const src = "https://placekitten.com/200/200";

const onClick = jest.fn();
const defaultProps: CardProps = {
  title: "Card title",
  description: "Card description",
  onClick: onClick,
};

describe(`<${Card.name}/> component`, () => {
  const factoryComponent = (props?: CardProps) =>
    render(<Card {...defaultProps} {...props} data-testid={Card.name} />);
  test("renders correctly", () => {
    const view = factoryComponent();
    expect(view.asFragment()).toMatchSnapshot();
  });
  test("renders correctly with header", () => {
    const view = factoryComponent({ header: "header" });
    expect(view.asFragment()).toMatchSnapshot("WithHeader");
  });
  test("renders correctly with isLoading", () => {
    const view = factoryComponent({ isLoading: true });
    expect(view.asFragment()).toMatchSnapshot("WithIsLoading");
  });
  test("renders correctly with img", () => {
    const view = factoryComponent({ img: src });
    expect(view.asFragment()).toMatchSnapshot("WithImg");
  });
  test("should call onClick function", () => {
    factoryComponent();
    userEvent.click(screen.getByTestId(Card.name));
    expect(onClick).toHaveBeenCalled();
  });
});
