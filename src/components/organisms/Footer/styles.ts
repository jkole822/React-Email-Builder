import { colors } from "../../../lib/theme";

const commonImageStyles = {
  display: "block",
  height: "auto",
  margin: "0 auto",
  width: "100%",
};

const commonStyles = {
  fontSize: "9px",
  lineHeight: "17px",
};

export const columnStyles = {
  padding: "0 80px",
};

export const imageOneStyles = {
  ...commonImageStyles,
  maxWidth: "165px",
};

export const imageTwoStyles = {
  ...commonImageStyles,
  maxWidth: "124px",
};

export const menuLinkStyles = {
  ...commonStyles,
  color: colors.primaryADA,
};

export const paragraphStyles = {
  ...commonStyles,
  color: colors.neutral100,
};
