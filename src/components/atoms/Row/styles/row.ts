import { styled } from "../../../../lib/theme";

export const styledRow: any = {
  overflowWrap: "break-word",
  margin: "0 auto",
  maxWidth: "600px",
  minWidth: "320px",
  width: "calc(100% - 40px) !important",
  wordWrap: "break-word",
  wordBreak: "break-word",
}

export const StyledRow = styled("div", {
  ...styledRow,

  '@desktop': {
    width: "600px !important",
  },
});
