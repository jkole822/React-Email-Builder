// React
import { FC } from "react";

// Styled Components
import { css } from "../../../lib/theme";
import { cell, Cell, table, Table, tableRow, TableRow } from "./styles";

// Types
import { EmptySpaceProps } from "./EmptySpace.typescript";
import { AlignEnum } from "../../../lib/typescript";

const EmptySpace: FC<EmptySpaceProps> = ({
  cellStyles,
  tableStyles,
  tableRowStyles,
}) => (
  <Table
    className={["mso-line-space", css(tableStyles)()].join(" ")}
    style={{ ...table, ...tableStyles }}
    width="100%"
  >
    <tbody>
      <TableRow style={{ ...tableRow, ...tableRowStyles }}>
        <Cell
          align={AlignEnum.center}
          className={["mso-table-space", css(cellStyles)()].join(" ")}
          style={{ ...cell, ...cellStyles }}
        >
          <span>&#160;</span>
        </Cell>
      </TableRow>
    </tbody>
  </Table>
);

export default EmptySpace;
