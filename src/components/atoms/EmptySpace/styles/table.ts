import { styled } from "../../../../lib/theme";

export const cell = {
  borderCollapse: "collapse !important",
  fontSize: "0px",
  lineHeight: "0px",
  MsTextSizeAdjust: "100%",
  overflowWrap: "break-word",
  verticalAlign: "top",
  WebkitTextSizeAdjust: "100%",
  wordBreak: "break-word",
};

export const table = {
  border: "0",
  borderCollapse: "collapse",
  borderSpacing: "0",
  cellPadding: "0",
  cellSpacing: "0",
  height: "0",
  MsTextSizeAdjust: "100%",
  tableLayout: "fixed",
  verticalAlign: "top",
  WebkitTextSizeAdjust: "100%",
  width: "100%",
};

export const tableRow = {
  verticalAlign: "top",
};

export const Cell = styled("td", {
  ...cell,
});

export const Table = styled("table", {
  ...table,
});

export const TableRow = styled("tr", {
  ...tableRow,
});
