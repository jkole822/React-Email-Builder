// React
import { FC } from "react";

// Styles
import { listStyles } from "./styles";

// Types
import { TypographyProps } from "./types";

export const List: FC<TypographyProps> = ({ children, styles }) => (
  <ul style={{ ...listStyles, ...styles }}>{children}</ul>
);
