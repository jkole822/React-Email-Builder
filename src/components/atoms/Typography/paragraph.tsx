// React
import { FC } from "react";

// Styles
import { paragraphStyles } from "./styles";

// Types
import { TypographyProps } from "./types";

export const Paragraph: FC<TypographyProps> = ({ children, styles }) => (
  <p style={{ ...paragraphStyles, ...styles }}>{children}</p>
);
