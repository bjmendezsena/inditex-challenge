import { extendTheme } from "@chakra-ui/react";

import { ConfigAvatar } from "./components/Avatar";
import { ConfigHeader } from "./components/Header";
import { ConfigLink } from "./components/Link";
import { ConfigNavigationIndicator } from "./components/NavigationIndicator";
import { ConfigSpinner } from "./components/Spinner";
import { ConfigText } from "./components/Text";
import { ConfigCard } from "./components/Card";
import { ConfigInput } from "./components/Input";
import { ConfigTable } from "./components/Table";

import colors from "./colors";

export const theme = extendTheme({
  config: {
    useSystemColorMode: false,
    initialColorMode: "light",
  },
  colors,
  components: {
    Avatar: ConfigAvatar,
    Header: ConfigHeader,
    Link: ConfigLink,
    NavigationIndicator: ConfigNavigationIndicator,
    Spinner: ConfigSpinner,
    Text: ConfigText,
    Card: ConfigCard,
    Input: ConfigInput,
    PodcastTable: ConfigTable,
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
