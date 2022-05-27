// React
import { FC } from "react";

// Styles
import { commonStyles } from "./styles";

// Types
import { TypographyProps } from "./types";

export const ListItem: FC<TypographyProps> = ({ children, styles }) => (
  <li style={{ ...commonStyles, ...styles }}>{children}</li>
);
