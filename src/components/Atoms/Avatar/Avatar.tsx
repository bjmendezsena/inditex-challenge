/* eslint-disable react-hooks/exhaustive-deps */
import { useMemo } from "react";
import { type avatarAnatomy as ChakraAvatarParts } from "@chakra-ui/anatomy";
import {
  Avatar as ChakraAvatar,
  type AvatarProps as ChakraAvatarProps,
} from "@chakra-ui/avatar";
import {
  forwardRef,
  useMultiStyleConfig as useChakraMultiStyleConfig,
} from "@chakra-ui/system";
import type {
  SystemStyleObject as ChakraSystemStyleObject,
  ComponentWithAs,
} from "@chakra-ui/system";
import { SkeletonCircle as ChakraSkeletonCircle } from "@chakra-ui/react";

import { type BaseMultiStyleConfiguration } from "../../../theme";
import _merge from "lodash/merge";

export const avatarPartsList: typeof ChakraAvatarParts.keys = [
  "container",
  "badge",
  "label",
  "group",
  "excessLabel",
];

type Parts = typeof avatarPartsList;

export interface AvatarThemeConfiguration
  extends BaseMultiStyleConfiguration<Parts> {
  baseStyle: ({
    name,
    badgeColor,
  }: {
    badgeColor?: string;
    name?: string;
  }) => Partial<AvatarThemeStyle>;
}

type AvatarThemeStyle = Record<Parts[number], ChakraSystemStyleObject>;
export interface AvatarProps extends Omit<ChakraAvatarProps, "children"> {
  isLoading?: boolean;
}

export const Avatar: ComponentWithAs<"span", AvatarProps> = forwardRef<
  AvatarProps,
  "span"
>(({ size, name, src, variant, isLoading, sx, ...props }: AvatarProps, ref) => {
  const styles = useChakraMultiStyleConfig("Avatar", {
    name: name && !src,
    size,
    variant,
  }) as AvatarThemeStyle;

  const avatarStyles = useMemo(() => _merge(styles.container, sx),[sx])

  if (isLoading) {
    return (
      <ChakraSkeletonCircle sx={styles.container} size={size} {...props} />
    );
  }


  return (
    <ChakraAvatar
      ref={ref}
      name={name}
      src={src}
      sx={avatarStyles}
      variant={variant}
      {...props}
    />
  );
});
