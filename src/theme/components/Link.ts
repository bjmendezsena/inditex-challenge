export const ConfigLink = {
  baseStyle: ({ isDisabled }: { isDisabled: boolean }) => ({
    display: "block",
    w: "fit-content",
    textDecoration: "none",
    position: "relative",
    fontWeight: "bold",
    color: "primary",
    cursor: isDisabled ? "not-allowed" : "pointer",
    _hover: {
      textDecoration: "none",
    },
    p: {
      px: 1,
    },
  }),
};
