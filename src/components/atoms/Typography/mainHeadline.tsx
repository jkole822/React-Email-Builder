// React
import { FC } from "react";

// Styles
import { headlineStyles } from "./styles";

// Types
import { TypographyProps } from "./types";

export const MainHeadline: FC<TypographyProps> = ({ children, styles }) => (
  <h1 style={{ ...headlineStyles, ...styles }}>{children}</h1>
);
