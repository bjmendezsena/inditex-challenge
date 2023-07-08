import {
  useStyleConfig,
  Flex as ChakraFlex,
  FlexProps,
} from "@chakra-ui/react";
import { BaseSingleStyleConfiguration } from "../../../theme/config/BaseSingleStyleConfiguration";

interface ThemeProps {
  isNavigating?: boolean;
}

export interface NavigationIndicatorThemeConfiguration
  extends Omit<BaseSingleStyleConfiguration, "baseStyle"> {
  baseStyle: (props: ThemeProps) => Partial<FlexProps>;
}

export interface NavigationIndicatorProps extends FlexProps {
  isNavigating?: boolean;
}

export const NavigationIndicator = (props: NavigationIndicatorProps) => {
  const themeStyles = useStyleConfig("NavigationIndicator", props);
  return <ChakraFlex sx={themeStyles} {...props} />;
};
