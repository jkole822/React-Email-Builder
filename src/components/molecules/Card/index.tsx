// React
import { FC } from "react";

// Components
import { Column } from "../../atoms/Column";
import { GhostCell } from "../../atoms/GhostCell";
import { GhostTable } from "../../atoms/GhostTable";
import { MainHeadline, Paragraph } from "../../atoms/Typography";

// Styles
import {
  columnStyles,
  iconStyles,
  mainHeadlineStyles,
  paragraphStyles,
} from "./styles";

// Types
import { VAlignEnum } from "../../../lib/typescript";
import { CardProps } from "./types";
import { ColumnEnum } from "../../../lib/typescript";
import { HiddenMSO } from "../../atoms/HiddenMSO";
import { Spacer } from "../../atoms/Spacer";

export const Card: FC<CardProps> = ({
  copy,
  displaySpacer,
  headline,
  icon,
}) => (
  <Column
    verticalAlignment={VAlignEnum.top}
    columnSize={ColumnEnum.oneThird}
    outerContainerStyles={columnStyles}
  >
    <GhostTable>
      <GhostCell verticalAlignment={VAlignEnum.top}>
        <img
          alt="alt_text"
          //@ts-ignore
          border="0"
          height="89"
          src={icon}
          style={iconStyles}
          width="89"
        />
        <MainHeadline styles={mainHeadlineStyles}>{headline}</MainHeadline>
        <Paragraph styles={paragraphStyles}>{copy}</Paragraph>
        {displaySpacer && (
          <HiddenMSO>
            <Spacer className="display-block-mobile" height={40} />
          </HiddenMSO>
        )}
      </GhostCell>
    </GhostTable>
  </Column>
);
