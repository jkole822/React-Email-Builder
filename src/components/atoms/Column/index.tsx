// React
import { FC, useContext } from "react";

// Context
import { CommentContext } from "../../../App";

// Styled Components
import { css } from "../../../lib/theme";
import { Cell, Container, InnerContainer, StyledColumn, Table } from "./styles";

// Types
import { ColumnProps } from "./Column.typescript";
import { ColumnEnum, AlignEnum } from "../../../lib/typescript";

const Column: FC<ColumnProps> = ({
  cellAlign = AlignEnum.center,
  cellStyles,
  columnStyles,
  containerStyles,
  innerContainerStyles,
  numColumns,
  children,
}) => {
  const setComments = useContext(CommentContext);
  const columnWidth =
    numColumns === ColumnEnum.three
      ? 200
      : numColumns === ColumnEnum.two
      ? 300
      : 600;

  return (
    <>
      {setComments &&
        `<!--[if (mso)|(IE)]><td align="${cellAlign}" width="${columnWidth}" style="width: ${columnWidth}px;padding: 0px;border-top: 0px solid transparent;border-left: 0px solid transparent;border-right: 0px solid transparent;border-bottom: 0px solid transparent;" valign="middle"><![endif]-->
        `}
      <StyledColumn
        className={css(columnStyles)()}
        numColumns={numColumns}
        style={columnStyles}
      >
        <Container className={css(containerStyles)()} style={containerStyles}>
          {setComments && `<!--[if (!mso)&(!IE)]><!-->`}
          <InnerContainer
            className={css(innerContainerStyles)()}
            style={innerContainerStyles}
          >
            <Table role="presentation" width="100%">
              <tbody>
                <tr>
                  <Cell align={cellAlign} style={cellStyles}>
                    {setComments && `<!--<![endif]-->`}
                    {children}
                    {setComments && `<!--[if (!mso)&(!IE)]><!-->`}
                  </Cell>
                </tr>
              </tbody>
            </Table>
          </InnerContainer>{" "}
          {setComments && `<!--<![endif]-->`}
        </Container>
      </StyledColumn>
      {setComments && `<!--[if (mso)|(IE)]></td><![endif]-->`}
    </>
  );
};

export default Column;
