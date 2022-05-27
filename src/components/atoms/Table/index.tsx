// React
import { FC } from "react";

// Types
import { TableProps } from "./types";

export const Table: FC<TableProps> = ({ children, styles, ...rest }) => (
  <table
    //@ts-ignore
    border="0"
    cellSpacing="0"
    cellPadding="0"
    role="presentation"
    style={styles}
    width="100%"
    {...rest}
  >
    <tbody>{children}</tbody>
  </table>
);
