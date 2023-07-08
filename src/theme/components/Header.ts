import type { HeaderThemeConfiguration } from "../../components";

export const ConfigHeader: HeaderThemeConfiguration = {
  parts: ["container", "contentContainer"],
  baseStyle: {
    container: {
      zIndex: 10,
      bg: "white",
      height: "64px",
      pl: 6,
      pr: 8,
      py: 4,
      boxShadow: "0px 3px 9px -7px rgba(0,0,0,0.75)",
    },
    contentContainer: {
      maxW: "1400px",
      justifyContent: "space-between",
      margin: "auto",
      w: "full",
    },
  },
};
