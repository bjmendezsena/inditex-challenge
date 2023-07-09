import { tablePartsList, TableThemeConfiguration } from "../../components";

const row = {
  bg: "white",
};

const baseStyle: TableThemeConfiguration["baseStyle"] = () => ({
  headerContainer: {
    mb: 2,
  },
  header: {
    py: 3,
    px: 1,
    textAlign: "left",
  },
  cell: {
    px: 2,
  },
  rowContainer: {
    ...row,
    borderBottom: "2px",
    borderColor: "grey.300",
  },
  tableContainer: {
    borderSpacing: "0 0.5rem",
  },
  container: {
    overflow: "auto",
    maxH: "624px",
    w: "100%",
    display: "flex",
    mt: "-0.5rem",
    mb: "-0.5rem",
  },
});

export const ConfigTable: TableThemeConfiguration = {
  parts: tablePartsList,
  baseStyle,
  sizes: {
    lg: {
      header: {
        py: "14px",
      },
    },
  },
  defaultProps: {
    size: "lg",
  },
};
