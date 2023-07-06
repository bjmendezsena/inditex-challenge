import { keyframes } from "@emotion/react";
import { NavigationIndicatorThemeConfiguration } from "../../components";

const wave = keyframes`
  0% {
    transform: scale(0.5);
  }
  50% {
    transform: scale(1);
  }
  100% {
    transform: scale(0.5);
  }
`;

const animation = `${wave} 1s ease-in-out infinite`;

export const ConfigNavigationIndicator: NavigationIndicatorThemeConfiguration =
  {
    baseStyle: ({ isNavigating }) => ({
      display: isNavigating ? "block" : "none",
      width: "30px",
      height: "30px",
      bg: "primary",
      borderRadius: "50%",
      border: "10px solid rgba(255,255,255,0.8)",
      animation: animation,
    }),
  };
