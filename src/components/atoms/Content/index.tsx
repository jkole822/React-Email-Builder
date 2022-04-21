// React
import { FC } from "react";

// Styled Components
import { css } from "../../../lib/theme";
import { cell, Cell, container, Container, table, Table } from "./styles";

// Types
import { ContentProps } from "./Content.typescript";
import { AlignEnum } from "../../../lib/typescript";

const Content: FC<ContentProps> = ({
  cellAlign = AlignEnum.center,
  cellStyles,
  containerStyles,
  tableStyles,
  children,
}) => (
  <Table
    className={css(tableStyles)()}
    role="presentation"
    style={{ ...table, ...tableStyles }}
    width="100%"
  >
    <tbody>
      <tr>
        <Cell
          align={cellAlign}
          className={css(cellStyles)()}
          style={{ ...cell, ...cellStyles }}
        >
          <Container
            className={css(containerStyles)()}
            style={{ ...container, ...containerStyles }}
          >
            {children}
          </Container>
        </Cell>
      </tr>
    </tbody>
  </Table>
);

export default Content;
