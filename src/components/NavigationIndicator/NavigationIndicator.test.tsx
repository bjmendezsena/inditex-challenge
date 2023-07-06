import { screen, waitFor } from "@testing-library/react";
import { render } from "../../test-utils";
import {
  NavigationIndicator,
  NavigationIndicatorProps,
} from "./NavigationIndicator";

describe(`<${NavigationIndicator.name}/> component`, () => {
  const factoryComponent = (props?: NavigationIndicatorProps) =>
    render(<NavigationIndicator {...props} />);

  test("renders correctly", () => {
    const view = factoryComponent();
    expect(view.asFragment()).toMatchSnapshot();
  });

  test("No display when isNavigating is false", async () => {
    factoryComponent();
    const container = screen.getByTestId("navigation-indicator");

    await waitFor(() => {
      expect(container).toHaveStyle("display: none");
    });
  });
  test("show indicator when isNavigating is true", async () => {
    factoryComponent({
      isNavigating: true,
    });
    const container = screen.getByTestId("navigation-indicator");

    await waitFor(() => {
      expect(container).toHaveStyle("display: block");
    });
  });
});
