import { extendTheme } from "@chakra-ui/react";
import colors from "./colors";
import { ConfigSpinner } from "./components/Spinner";
import { ConfigLink } from "./components/Link";
import { ConfigHeader } from "./components/Header";
import { ConfigText } from "./components/Text";
import { ConfigNavigationIndicator } from "./components/NavigationIndicator";

export const theme = extendTheme({
  config: {
    useSystemColorMode: false,
    initialColorMode: "light",
  },
  colors,
  components: {
    Spinner: ConfigSpinner,
    Link: ConfigLink,
    Header: ConfigHeader,
    Text: ConfigText,
    NavigationIndicator: ConfigNavigationIndicator,
  },
  global: {
    body: {
      bg: "grey.100",
    },
  },
  semanticTokens: {
    colors: {
      primary: "primary.500",
    },
  },
});

export * from "./config";
