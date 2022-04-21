import { styled } from "../../../../lib/theme";

export const container = {
  border: "0",
  overflowWrap: "break-word",
  wordBreak: "break-word",
  wordWrap: "break-word",
};

export const Container = styled("div", {
  ...container,
});
