import { screen } from "@testing-library/react";
import { render } from "../../test-utils";
import type { LinkProps } from "./Link";
import { Link } from "./Link";

describe("<Link/> component", () => {
  const defaultText = "Click me";

  const defaultProps: LinkProps = {
    children: defaultText,
  };

  const factoryComponent = (props: LinkProps = defaultProps) =>
    render(<Link {...props} />);

  test("renders correctly", () => {
    const view = factoryComponent();

    expect(view.asFragment()).toMatchSnapshot();
  });

  test("show disabled component", async () => {
    factoryComponent({
      ...defaultProps,
      isDisabled: true,
      variant: "highlighted",
    });
    const container = screen.getByTestId("link");

    expect(container).not.toHaveStyle("cursor: pointer");
    expect(container).toHaveStyle("cursor: not-allowed");
  });
});
