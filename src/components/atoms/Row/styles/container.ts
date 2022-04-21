import { media, styled } from "../../../../lib/theme";

export const Container = styled("div", {
  [media.mobile]: {
    maxWidth: "100% !important",
    padding: "0px !important",
  },
});

export const InnerContainer = styled('div', {
    borderCollapse: "collapse",
    display: "table",
    width: "100%"
})