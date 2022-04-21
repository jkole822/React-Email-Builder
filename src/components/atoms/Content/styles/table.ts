import { styled } from "../../../../lib/theme";

export const cell = {
  border: "0",
  overflowWrap: "break-word",
  wordBreak: "break-word",
  wordWrap: "break-word",
};

export const table = {
  border: "0",
  cellPadding: "0",
  cellSpacing: "0",
  width: "100%",
};

export const Cell = styled("td", {
  ...cell,
});

export const Table = styled("table", {
  ...table,
});
