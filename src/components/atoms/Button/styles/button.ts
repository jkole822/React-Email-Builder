import { styled } from "../../../../lib/theme";

export const styledButton = {
  borderRadius: "0px",
  boxSizing: "border-box",
  display: "inline-block",
  overflowWrap: "break-word",
  maxWidth: "100%",
  MozBorderRadius: "0px",
  textDecoration: "none",
  WebkitBorderRadius: "0px",
  WebkitTextSizeAdjust: "none",
  width: "auto",
  wordBreak: "break-word",
  wordWrap: "break-word",
};

export const StyledButton = styled("a", {
  ...styledButton,
});
