import { extendTheme } from "@chakra-ui/react";
import { mainColors } from "./colors";
import { ConfigButton } from "./components/Button";
import { ConfigSpinner } from "./components/Spinner";

export const theme = extendTheme({
  config: {
    useSystemColorMode: false,
    initialColorMode: "light",
  },
  colors: {
    ...mainColors,
  },
  components: {
    Button: ConfigButton,
    Spinner: ConfigSpinner,
  },
  global: {
    body: {
      bg: "grey.100",
    },
  },
});

export * from "./config";
