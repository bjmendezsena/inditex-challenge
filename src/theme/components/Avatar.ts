import {
  type AvatarThemeConfiguration,
  avatarPartsList,
} from "../../components";

const baseStyle: AvatarThemeConfiguration["baseStyle"] = ({
  name,
  badgeColor,
}) => ({
  container: {
    bg: "white",
    fontWeight: "medium",
    svg: {
      color: "grey.400",
    },
  },
  badge: {
    border: "none",
    transform: name ? "translate(0%, 0%)" : "translate(25%, 0%)",
    boxShadow: "0 0 0 0.15em var(--chakra-colors-white)",
    bg: badgeColor ? badgeColor : "green.500",
  },
});

const sizes: AvatarThemeConfiguration["sizes"] = {
  md: ({ name }) => ({
    container: {
      width: 8,
      height: 8,
    },
    badge: {
      boxSize: name ? 2 : 3.5,
    },
  }),
  lg: ({ name }) => ({
    container: {
      width: "80px",
      height: "80px",
    },
    badge: {
      boxSize: name ? 2.5 : 4,
    },
  }),
};

export const ConfigAvatar: AvatarThemeConfiguration = {
  parts: avatarPartsList,
  baseStyle,
  sizes,
  variants: {
    light: () => ({
      container: {
        color: "black",
      },
    }),
    dark: () => ({
      container: {
        color: "white",
      },
    }),
  },

  defaultProps: {
    size: "md",
    variant: "light",
  },
};
