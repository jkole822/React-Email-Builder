// React
import { FC } from "react";

// Components
import { Column } from "../Column";
import { GhostCell } from "../GhostCell";
import { GhostTable } from "../GhostTable";
import { Row } from "../Row";
import { Table } from "../Table";

// Types
import { ContainerProps } from "./types";

export const Container: FC<ContainerProps> = ({
  children,
  styles,
  ...rest
}) => (
  <Table styles={styles}>
    <Row backgroundColor="transparent">
      <Column>
        <GhostTable width="auto">
          <GhostCell {...rest}>{children}</GhostCell>
        </GhostTable>
      </Column>
    </Row>
  </Table>
);
