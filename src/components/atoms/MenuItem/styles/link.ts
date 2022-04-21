import { styled } from "../../../../lib/theme";

export const linkStyleObj: any = {
  color: "$neutral200",
  display: "inline-block",
  fontSize: "14px",
  padding: "24px 14px",
  textTransform: "uppercase",
};

export const Link = styled("a", {
  ...linkStyleObj,
});
