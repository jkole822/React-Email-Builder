// React
import { FC } from "react";

// Components
import { Column } from "../../atoms/Column";
import { GhostCell } from "../../atoms/GhostCell";
import { GhostTable } from "../../atoms/GhostTable";
import { Link } from "../../atoms/Typography";

// Styles
import { iconStyles } from "./styles";

// Types
import { SocialMediaIconProps } from "./types";

export const SocialMediaIcon: FC<SocialMediaIconProps> = ({ href, icon }) => (
  <Column customColumnSize={45}>
    <GhostTable width={45}>
      <GhostCell>
        <Link href={href}>
          <img
            alt="alt_text"
            //@ts-ignore
            border="0"
            height="32"
            src={icon}
            style={iconStyles}
            width="32"
          />
        </Link>
      </GhostCell>
    </GhostTable>
  </Column>
);
