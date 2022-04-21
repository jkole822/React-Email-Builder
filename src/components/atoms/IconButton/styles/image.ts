import { styled } from "../../../../lib/theme";

export const imageStyles = {
  border: "none",
  height: "auto",
  maxWidth: "32px !important",
  MsInterpolationMode: "bicubic",
  outline: "none",
  textDecoration: "none",
  width: "32px",
};

export const Image = styled("img", {
  ...imageStyles,
});
