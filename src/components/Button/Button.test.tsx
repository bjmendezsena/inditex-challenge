import React from "react";
import { screen } from "@testing-library/react";
import { render } from "../../test-utils";
import type { ButtonProps } from "./Button";
import { Button } from "./Button";

describe(`<Button />`, () => {
  const defaultText = "Content of the button";
  const defaultProps: ButtonProps = {
    children: <>{defaultText}</>,
  };

  const baseSizesList = ["md", "lg"];
  const baseVariantsList = ["primary", "tertiary", "secondary"];
  const statusColors = ["success", "error", "warning", "info"];
  const factoryComponent = (props: ButtonProps = defaultProps) =>
    render(<Button {...props} />);

  test("renders correctly", () => {
    const view = factoryComponent();

    expect(view.asFragment()).toMatchSnapshot();
  });

  test("shows correctly children", () => {
    const label = "Text of the button";
    factoryComponent({ children: <>{label}</> });

    expect(screen.getByText(label)).toBeVisible();
  });

  test("pass down props", () => {
    factoryComponent({
      isDisabled: true,
      children: <>{defaultText}</>,
    });

    expect(screen.getByText(defaultText)).toBeDisabled();
  });

  baseVariantsList.forEach((variant) => {
    baseSizesList.forEach((size) => {
      statusColors.forEach((status) => {
        test(`renders correctly for size ${size} & variant ${variant}`, () => {
          const view = factoryComponent({
            ...defaultProps,
            size,
            variant,
            status,
          });
          expect(view.asFragment()).toMatchSnapshot(
            `Button-${variant}-${size}-${status}`
          );
        });
      });
    });
  });
});
