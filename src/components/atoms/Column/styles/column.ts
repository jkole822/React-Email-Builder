import { media, styled } from "../../../../lib/theme";
import { ColumnEnum } from "../../../../lib/typescript";

export const StyledColumn = styled("div", {
  display: "block",
  margin: "0 auto",
  verticalAlign: "middle",
  width: "100%",

  variants: {
    numColumns: {
      [ColumnEnum.one]: {
        [media.desktop]: {
          display: "table-cell",
          minWidth: "600px",
          width: "600px",
        },
      },
      [ColumnEnum.two]: {
        [media.desktop]: {
          display: "table-cell",
          minWidth: "300px",
          width: "300px",
        },
      },
      [ColumnEnum.three]: {
        [media.desktop]: {
          display: "table-cell",
          minWidth: "200px",
          width: "200px",
        },
      },
    },
  },
});