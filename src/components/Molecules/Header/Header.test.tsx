import { screen } from "@testing-library/react";
import { render } from "../../../test-utils";
import type { HeaderProps } from "./Header";
import { Header } from "./Header";
import { Stack } from "@chakra-ui/react";

describe(`<Header />`, () => {
  const defaultProps: HeaderProps = {
    leftContent: (
      <Stack data-testid='left-content' spacing={6}>
        <h1>Left</h1>
      </Stack>
    ),
    rightContent: (
      <div data-testid='right-content'>
        <h1>Right</h1>
      </div>
    ),
  };
  const factoryComponent = (props: HeaderProps = defaultProps) =>
    render(<Header {...props} />);

  test("renders correctly", () => {
    const view = factoryComponent();
    expect(screen.getByTestId("header")).toBeInTheDocument();
    expect(view.asFragment()).toMatchSnapshot();
  });
  test("renders correctly only left content", () => {
    const view = factoryComponent({
      leftContent: defaultProps.leftContent,
    });
    expect(screen.getByTestId("left-content")).toBeVisible();
    expect(screen.queryByTestId("right-content")).toBeNull();
    expect(view.asFragment()).toMatchSnapshot("OnlyLeftContent");
  });

  test("renders correctly only right content", () => {
    const view = factoryComponent({
      rightContent: defaultProps.rightContent,
    });
    expect(screen.getByTestId("right-content")).toBeVisible();
    expect(screen.queryByTestId("left-content")).toBeNull();
    expect(view.asFragment()).toMatchSnapshot("OnlyRightContent");
  });
});
