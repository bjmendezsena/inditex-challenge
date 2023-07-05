import type { ButtonThemeConfiguration } from "../../components/Button";
import { buttonVariants, buttonSizes } from "./utils";

export const ConfigButton: ButtonThemeConfiguration = {
  baseStyle: {
    minHeight: 12,
    height: "unset",
    minWidth: 19,
    paddingY: 2,
    paddingX: 4,
    justifyContent: "center",
    alignItems: "center",
    apply: "textStyles.ElementsMediumSM",
    borderRadius: 8,
    transition: "all 0.2s",
    display: "inline-flex",
    color: "grey.400",
    _disabled: {
      opacity: 1,
      backgroundColor: "grey.200",
      color: "grey.400",
    },
    _loading: {
      backgroundColor: "grey.200",
      position: "relative",
      color: "white",
      zIndex: 0,
      _hover: {
        backgroundColor: "grey.200",
      },
    },
  },
  sizes: buttonSizes,
  variants: buttonVariants,
  defaultProps: {
    size: "lg",
    variant: "primary",
  },
};
