import { CardThemeConfig, cardPartsList } from "../../components";

export const ConfigCard: CardThemeConfig = {
  parts: cardPartsList,
  baseStyle: ({ isHovered }) => ({
    container: {
      bg: "transparent",
      borderRadius: "md",
      boxShadow: "none",
      p: 4,
      maxW: "230px",
    },
    body: {
      overflowY:'hidden',
      transition: "all 0.02s ease-in-out",
      mb: 4,
      bg: "white",
      borderRadius: "md",
      boxShadow: "md",
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
      bg: "gray.100",
      _hover: {
        cursor: "pointer",
      },
    },
    title: {
      fontSize: "15px",
      fontWeight: "semibold",
      color: "black",
    },
    description: {
      fontSize: "12px",
      fontWeight: "regular",
      color: "text.bold",
      textOverflow:'ellipsis',
    },
  }),
};
