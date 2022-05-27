// React
import { FC } from "react";

// Components
import { GhostTable } from "../GhostTable";
import { GhostCell } from "../GhostCell";
import { Table } from "../Table";

// Styles
import { spacerStyles } from "./styles";

// Types
import { SpacerProps } from "./types";

export const Spacer: FC<SpacerProps> = ({ color, height, ...rest }) => (
  <Table {...rest}>
    <tr>
      <td aria-hidden="true" height={height} style={spacerStyles}>
        <GhostTable>
          <GhostCell backgroundColor={color || "inherit"}>&nbsp;</GhostCell>
        </GhostTable>
      </td>
    </tr>
  </Table>
);
