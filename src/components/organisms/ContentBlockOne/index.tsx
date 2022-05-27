// React
import { FC } from "react";

// Components
import { Button } from "../../atoms/Button";
import { Column } from "../../atoms/Column";
import { GhostCell } from "../../atoms/GhostCell";
import { GhostTable } from "../../atoms/GhostTable";
import { MainHeadline, Paragraph } from "../../atoms/Typography";
import { Row } from "../../atoms/Row";
import { Spacer } from "../../atoms/Spacer";
import { Table } from "../../atoms/Table";

// Styles
import { colors } from "../../../lib/theme";
import {
  columnStyles,
  innerContainerStyles,
  imageStyles,
  mainHeadlineStyles,
  topParagraphStyles,
} from "./styles";

export const ContentBlockOne: FC = () => {
  const bottomButton = (
    <>
      <Button href="#">Open Account</Button>
      <Spacer height={50} />
    </>
  );

  const bottomParagraph = (
    <>
      <Paragraph>
        Thanks for trusting us with a savings account. We’ve got an idea on how
        to make it even better:
        <strong>
          Premium Online Savings accounts are the future of savings with high
          yields, no fees, and 24/7 access.
        </strong>
      </Paragraph>
      <Spacer height={20} />
    </>
  );

  const image = (
    <>
      <img
        alt="alt_text"
        //@ts-ignore
        border="0"
        height="313"
        src="assets/images/circleStock.png"
        style={imageStyles}
        width="313"
      />
      <Spacer height={40} />
    </>
  );

  const mainHeadline = (
    <>
      <MainHeadline styles={mainHeadlineStyles}>
        PenFed’s Premium Online Savings.
      </MainHeadline>
      <Spacer height={20} />
    </>
  );

  const topButton = (
    <>
      <Button href="#">Open Account</Button>
      <Spacer height={50} />
    </>
  );

  const topParagraph = (
    <>
      <Spacer height={56} />
      <Paragraph styles={topParagraphStyles}>Why we love</Paragraph>
      <Spacer height={5} />
    </>
  );

  const elements = [
    topParagraph,
    mainHeadline,
    topButton,
    image,
    bottomParagraph,
    bottomButton,
  ];

  const renderRows = () =>
    elements.map((element, index) => (
      <Row
        backgroundColor={colors.neutral100}
        key={index}
        innerContainerStyles={innerContainerStyles}
      >
        <Column isThinColumn styles={columnStyles}>
          <GhostTable width={600}>
            <GhostCell>{element}</GhostCell>
          </GhostTable>
        </Column>
      </Row>
    ));

  return (
    <>
      <Spacer height={25} />
      <Table>{renderRows()}</Table>
      <Spacer height={25} />
    </>
  );
};
