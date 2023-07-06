import type { LinkProps as ChakraLinkProps } from "@chakra-ui/react";
import type { ComponentWithAs } from "@chakra-ui/system";
import {
  useStyleConfig as useChakraStyleConfig,
  Link as ChakraLink,
  forwardRef,
} from "@chakra-ui/react";

export interface LinkProps extends ChakraLinkProps {
  isDisabled?: boolean;
  variant?: ChakraLinkProps["variant"];
}

export const Link: ComponentWithAs<"a", LinkProps> = forwardRef<LinkProps, "a">(
  ({ children, variant, isDisabled, sx, ...props }: LinkProps, ref) => {
    const themeStyles = useChakraStyleConfig("Link", {
      isDisabled,
      variant,
    });

    return (
      <ChakraLink
        data-testid="link"
        ref={ref}
        as={isDisabled ? "span" : "a"}
        tabIndex={0}
        sx={themeStyles}
        variant={variant}
        {...props}
      >
        {children}
      </ChakraLink>
    );
  }
);
