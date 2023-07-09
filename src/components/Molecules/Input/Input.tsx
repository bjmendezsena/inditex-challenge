import { useFormControlContext as useChakraFormControlContext } from "@chakra-ui/form-control";
import type { InputProps as ChakraInputProps } from "@chakra-ui/input";
import {
  Input as ChakraInput,
  InputGroup as ChakraInputGroup,
} from "@chakra-ui/input";
import type {
  SystemStyleObject as ChakraSystemStyleObject,
  ComponentWithAs,
} from "@chakra-ui/system";
import {
  forwardRef,
  useMultiStyleConfig as useChakraMultiStyleConfig,
} from "@chakra-ui/system";
import React from "react";
import _merge from "lodash/merge";
import { Text } from "../../Atoms";

import { Box as ChakraBox, useBreakpointValue } from "@chakra-ui/react";

import type { BaseMultiStyleConfiguration } from "../../../theme";

export const inputPartsList: Array<
  | "labelContainer"
  | "label"
  | "addonLeft"
  | "addonRight"
  | "input"
  | "container"
  | "errorIcon"
> = [
  "container",
  "addonLeft",
  "addonRight",
  "labelContainer",
  "label",
  "input",
  "errorIcon",
];

type Parts = typeof inputPartsList;

export type InputConfigProps = {
  size: string;
  variant: ChakraInputProps["variant"];
  hasLabel?: boolean;

  onClear?: React.MouseEventHandler<HTMLButtonElement>;
};
export interface InputThemeConfiguration
  extends BaseMultiStyleConfiguration<Parts> {}

export interface InputProps extends ChakraInputProps {
  size?: string;
  label?: string;
  onClear?: React.MouseEventHandler<HTMLButtonElement>;
}

export type InputThemeStyle = Record<Parts[number], ChakraSystemStyleObject> & {
  errorIcon: React.FunctionComponent;
  validIcon: React.FunctionComponent;
  clearIconButton: React.FunctionComponent;
};

export const defaultInputSize = { base: "lg", lg: "md" };
export const Input: ComponentWithAs<"input", InputProps> = forwardRef<
  InputProps,
  "input"
>(
  (
    {
      size,
      variant,
      id,
      isInvalid,
      isDisabled,
      label,
      placeholder = " ",
      onClear,
      sx,
      ...props
    }: InputProps,
    ref
  ) => {
    const formControl = useChakraFormControlContext() || {};
    const invalid = isInvalid ?? formControl.isInvalid;

    const defaultSize = useBreakpointValue(defaultInputSize);
    const inputSize = size || defaultSize;

    const styles = useChakraMultiStyleConfig("Input", {
      size: inputSize,
      variant,
      isDisabled,
      hasLabel: Boolean(label),
      onClear,
    }) as InputThemeStyle;

    const inputStyle = React.useMemo<ChakraSystemStyleObject>(
      () => _merge(styles.input, sx),
      [styles.input, sx]
    );

    return (
      <ChakraBox
        as='label'
        sx={styles.labelContainer}
        htmlFor={id}
        flex={1}
        position='relative'
        ref={ref}
      >
        {label && (
          <Text as='span' id='label' display='flex' sx={styles.label}>
            {label}
          </Text>
        )}
        <ChakraInputGroup overflow='hidden' sx={styles.container}>
          <ChakraInput
            size={inputSize}
            variant={variant}
            id={id}
            sx={inputStyle}
            isDisabled={isDisabled}
            isInvalid={invalid}
            placeholder={placeholder}
            {...props}
          />
        </ChakraInputGroup>
      </ChakraBox>
    );
  }
);
