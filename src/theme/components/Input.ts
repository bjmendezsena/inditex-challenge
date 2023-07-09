import { inputPartsList, type InputThemeConfiguration } from "../../components";

const baseStyle: InputThemeConfiguration["baseStyle"] = () => ({
  labelContainer: {
    width: "100%",
    position: "relative",
  },
  input: {
    paddingStart: 3,
    paddingEnd: 3,
    position: "relative",
    apply: "textStyles.ElementsRegularSM",
    color: "grey.800",
    textOverflow: "ellipsis",
    _placeholder: {
      apply: "textStyles.ElementsRegularSM",
      color: "grey.400",
    },
  },
  label: {
    apply: "textStyles.ElementsRegularSM",
    color: "grey.700",
    zIndex: 1,
    mb: 2,
  },
});

const sizesStyles = {
  sm: {
    input: {
      minH: 8,
      paddingY: "5px",
    },
  },
  md: {
    input: {
      minH: 10,
      paddingY: "9px",
    },
  },
  lg: {
    input: {
      minH: 12,
      paddingY: "13px",
    },
  },
};

const outline = () => ({
  input: {
    border: "1px solid",
    borderColor: "grey.300",
    borderRadius: "simple",
    _hover: {
      borderColor: "grey.500",
    },
    _focus: {
      borderColor: "primary",
      _hover: { borderColor: "primary" },
    },
    _active: {
      borderColor: "primary",
      _hover: { borderColor: "primary" },
    },
    _invalid: {
      borderColor: "error",
      _focus: {
        borderColor: "error",
        boxShadow: "none",
      },
      _active: {
        borderColor: "error",
        boxShadow: "none",
      },
    },
    _disabled: {
      borderColor: "grey.100",
      bg: "grey.50",
      color: "grey.300",
    },
  },
});

export const ConfigInput: InputThemeConfiguration = {
  parts: inputPartsList,
  baseStyle,
  sizes: {
    sm: sizesStyles.sm,
    md: sizesStyles.md,
    lg: sizesStyles.lg,
  },
  variants: {
    outline,
  },
  defaultProps: {
    variant: "outline",
  },
};
