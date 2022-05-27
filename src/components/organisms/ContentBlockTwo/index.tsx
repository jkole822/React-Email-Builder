// React
import { FC } from "react";

// Components
import { CardRow } from "../../molecules/CardRow";
import { Column } from "../../atoms/Column";
import { GhostCell } from "../../atoms/GhostCell";
import { GhostTable } from "../../atoms/GhostTable";
import {
  Link,
  MainHeadline,
  Paragraph,
  SubHeadline,
} from "../../atoms/Typography";
import { Row } from "../../atoms/Row";
import { Spacer } from "../../atoms/Spacer";
import { Table } from "../../atoms/Table";

// Styles
import { colors } from "../../../lib/theme";
import {
  bottomLinkStyles,
  bottomParagraphStyles,
  columnStyles,
  mainHeadlineStyles,
  subHeadlineStyles,
} from "./styles";

export const ContentBlockTwo: FC = () => {
  const bottomLink = (
    <>
      <Link href="#" styles={bottomLinkStyles}>
        Check it out &gt;
      </Link>
      <Spacer height={50} />
    </>
  );

  const bottomParagraph = (
    <>
      <Paragraph styles={bottomParagraphStyles}>
        Check it out for yourself by using our Premium Online Savings Calculator
        to find out what dividends you could earn.
      </Paragraph>
      <Spacer height={5} />
    </>
  );

  const cards = (
    <>
      <CardRow
        cards={[
          {
            copy: "Pocket more of your money.",
            headline: "No monthly fees",
            icon: "assets/icons/iconOne.png",
          },
          {
            copy: "8x higher yields than the national average.",
            headline: "Higher APY*",
            icon: "assets/icons/iconTwo.png",
          },
          {
            copy: "No annoying transfer fees.",
            headline: "Free transfers",
            icon: "assets/icons/iconThree.png",
          },
        ]}
      />
      <Spacer height={70} />
    </>
  );

  const mainHeadline = (
    <>
      <Spacer height={50} />
      <MainHeadline styles={mainHeadlineStyles}>
        Our Premium Online Savings Account Benefits:
      </MainHeadline>
      <Spacer height={30} />
    </>
  );

  const subHeadline = (
    <>
      <SubHeadline styles={subHeadlineStyles}>
        Don’t take our word for it.
      </SubHeadline>
      <Spacer height={10} />
    </>
  );

  const elements = [
    mainHeadline,
    cards,
    subHeadline,
    bottomParagraph,
    bottomLink,
  ];

  const renderRows = () =>
    elements.map((element, index) => (
      <Row backgroundColor={colors.neutral100} key={index}>
        <Column styles={columnStyles}>
          <GhostTable width={640}>
            <GhostCell>{element}</GhostCell>
          </GhostTable>
        </Column>
      </Row>
    ));

  return <Table>{renderRows()}</Table>;
};
