// React
import { FC } from "react";

// Styles
import { menuLinkStyles } from "./styles";

// Types
import { LinkProps } from "./types";

export const MenuLink: FC<LinkProps> = ({ children, href, styles }) => (
  <a href={href} style={{ ...menuLinkStyles, ...styles }}>
    {children}
  </a>
);
