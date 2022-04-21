import { styled } from "../../../../lib/theme";

export const cell = {
  borderCollapse: 'collapse !important',
  verticalAlign: 'top',
  wordBreak: "break-word",
};

export const table = {
  border: "0",
  borderCollapse: 'collapse',
  borderSpacing: '0',
  cellPadding: "0",
  cellSpacing: "0",
  height: '32px',
  tableLayout: 'fixed',
  verticalAlign: 'top',
  width: "32px",
};

export const tableRow = {
  verticalAlign: "top"
}

export const Cell = styled("td", {
  ...cell,
});

export const Table = styled("table", {
  ...table,
});

export const TableRow = styled('tr', {
  ...tableRow
})