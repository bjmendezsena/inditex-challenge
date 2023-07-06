import React from "react";
import { screen } from "@testing-library/react";
import { render } from "../../test-utils";
import type { TextProps } from "./Text";
import { Text } from "./Text";

describe(`<Text />`, () => {
  const defaultProps = {
    fontSize: "32px",
  };

  const themeCustom = {
    textStyles: {
      red: {
        color: "red",
      },
    },
    components: {
      Text: {
        variants: {
          regular: {
            fontFamily: "Helvetica Neue",
          },
        },
      },
    },
  };

  const factoryComponent = (props: TextProps = defaultProps) =>
    render(
      <Text {...props} data-testid="Text">
        Text example
      </Text>,
      themeCustom
    );

  test("renders correctly", () => {
    const view = factoryComponent();

    expect(view.asFragment()).toMatchSnapshot();
  });

  test("renders correctly with text style", () => {
    const view = factoryComponent({ textStyle: "red" });

    expect(view.asFragment()).toMatchSnapshot("WithTextStyle");
  });

  test("renders correctly with variant", () => {
    const view = factoryComponent({ variant: "regular" });

    expect(view.asFragment()).toMatchSnapshot("WithVariant");
  });

  test("renders correctly with custom Text tag", () => {
    const view = factoryComponent({ as: "span" });

    expect(screen.getByTestId("Text").tagName).toBe("SPAN");
    expect(view.asFragment()).toMatchSnapshot("WithCustomTag");
  });
});
