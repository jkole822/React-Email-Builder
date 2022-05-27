// React
import { FC } from "react";

// Styles
import { linkStyles } from "./styles";

// Types
import { LinkProps } from "./types";

export const Link: FC<LinkProps> = ({ children, href, styles }) => (
  <a href={href} style={{ ...linkStyles, ...styles }}>
    {children}
  </a>
);
