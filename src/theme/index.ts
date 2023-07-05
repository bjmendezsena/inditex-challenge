import { extendTheme } from "@chakra-ui/react";
import { mainColors } from "./colors";
import { ConfigButton } from "./components/Button";
import { ConfigSpinner } from "./components/Spinner";
export const theme = extendTheme({
  colors: {
    ...mainColors,
  },
  components: {
    Button: ConfigButton,
    Spinner: ConfigSpinner,
  },
});

export * from "./config";
