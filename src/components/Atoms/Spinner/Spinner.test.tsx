import { screen } from "@testing-library/react";
import { render } from "../../../test-utils";
import { ConfigSpinner } from "../../../theme/components/Spinner";
import React from "react";
import type { SpinnerProps } from "./Spinner";
import { Spinner } from "./Spinner";

describe(`<Spinner />`, () => {
  const factoryComponent = (props: SpinnerProps = {}) =>
    render(<Spinner {...props} />);

  test("renders correctly", () => {
    const view = factoryComponent();

    const spinnerStyle = getComputedStyle(screen.getByTestId("spinner"));
    expect(spinnerStyle.borderWidth).toBe(ConfigSpinner.sizes.xxs.borderWidth);
    expect(view.asFragment()).toMatchSnapshot("Default Spinner");
  });

  test("renders correctly with size", () => {
    const view = factoryComponent({ size: "sm" });
    const spinnerStyle = getComputedStyle(screen.getByTestId("spinner"));
    expect(spinnerStyle.borderWidth).toBe(ConfigSpinner.sizes.sm.borderWidth);
    expect(view.asFragment()).toMatchSnapshot("Sized Spinner");
  });
});
