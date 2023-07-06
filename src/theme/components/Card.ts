import { CardThemeConfig, cardPartsList } from "../../components";

export const ConfigCard: CardThemeConfig = {
  parts: cardPartsList,
  baseStyle: ({ isHovered }) => ({
    container: {
      bg: "transparent",
      borderRadius: "md",
      boxShadow: "none",
      p: 4,
    },
    body: {
      transition: "all 0.02s ease-in-out",
      mb: 4,
      bg: "white",
      borderRadius: "md",
      boxShadow: "base",
      p: 4,
      minW: "150px",
      minH: "120px",
      display: "flex",
      justifyContent: "center",
      pt: 12,
      ...(isHovered && {
        cursor: "pointer",
        bg: "gray.50",
      }),
    },
    header: {
      position: "relative",
      fontSize: "xl",
    },
    footer: {
      fontSize: "sm",
      display: "flex",
      justifyContent: "center",
    },
    avatar: {
      position: "absolute",
      bg: "gray.100",
      top: "0",
      left: "30%",
      _hover: {
        cursor: "pointer",
      },
    },
    title: {
      fontSize: "xl",
      fontWeight: "semibold",
      color: "black",
    },
    description: {
      fontSize: "sm",
      fontWeight: "regular",
      color: "text.bold",
    },
  }),
};
