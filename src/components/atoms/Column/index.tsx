// React
import { FC } from "react";

// Components
import { GhostCell } from "../GhostCell";
import { Table } from "../Table";

// Styles
import { defaultOuterContainerStyles } from "./styles";

// Types
import { ColumnProps } from "./types";
import { ColumnEnum } from "../../../lib/typescript";

export const Column: FC<ColumnProps> = ({
  children,
  columnSize,
  customColumnSize,
  isThinColumn = false,
  outerContainerStyles,
  styles,
  ...rest
}) => {
  const width = customColumnSize
    ? customColumnSize
    : isThinColumn
    ? columnSize === ColumnEnum.oneHalf
      ? 275
      : columnSize === ColumnEnum.oneThird
      ? 182
      : columnSize === ColumnEnum.twoThirds
      ? 362
      : 600
    : columnSize === ColumnEnum.oneHalf
    ? 295
    : columnSize === ColumnEnum.oneThird
    ? 195
    : columnSize === ColumnEnum.twoThirds
    ? 395
    : 640;

  const sizeStyles = { maxWidth: width };

  return (
    <GhostCell width={customColumnSize || width} {...rest}>
      <div
        style={{
          ...defaultOuterContainerStyles,
          ...sizeStyles,
          ...outerContainerStyles,
        }}
      >
        <Table>
          <tr>
            <td style={styles}>{children}</td>
          </tr>
        </Table>
      </div>
    </GhostCell>
  );
};
