import { colors, fonts } from "../../../lib/theme";

export const commonStyles = {
  color: colors.neutral200,
  fontFamily: fonts.sansSerif,
  margin: 0,
  padding: 0,
};

export const headlineStyles = {
  ...commonStyles,
  fontFamily: fonts.serif,
};

export const paragraphStyles = {
  ...commonStyles,
  fontSize: "16px",
  lineHeight: "22px",
};

export const linkStyles = {
  ...commonStyles,
  display: "inline-block",
  textDecoration: "none",
};

export const listStyles = {
  ...commonStyles,
  listStyle: "none",
};

export const menuLinkStyles = {
  ...commonStyles,
  color: colors.primary300,
  textDecoration: "underline",
};
