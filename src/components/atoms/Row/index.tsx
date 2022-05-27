// React
import { FC } from "react";

// Components
import { GhostTable } from "../GhostTable";

// Styles
import { defaultInnerContainerStyles } from "./styles";

// Types
import { RowProps } from "./types";

export const Row: FC<RowProps> = ({
  backgroundColor,
  children,
  innerContainerStyles,
  outerContainerStyles,
}) => (
  <tr>
    <td style={outerContainerStyles}>
      <div
        //@ts-ignore
        style={{
          backgroundColor,
          ...defaultInnerContainerStyles,
          ...innerContainerStyles,
        }}
      >
        <GhostTable backgroundColor={backgroundColor}>{children}</GhostTable>
      </div>
    </td>
  </tr>
);
