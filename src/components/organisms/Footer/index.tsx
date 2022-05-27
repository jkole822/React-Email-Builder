// React
import { FC, Fragment } from "react";

// Components
import { Column } from "../../atoms/Column";
import { GhostCell } from "../../atoms/GhostCell";
import { GhostTable } from "../../atoms/GhostTable";
import { MenuLink, Paragraph } from "../../atoms/Typography";
import { Row } from "../../atoms/Row";
import { Spacer } from "../../atoms/Spacer";
import { SocialMediaIconRow } from "../../molecules/SocialMediaIconRow";
import { Table } from "../../atoms/Table";

// Styles
import { colors } from "../../../lib/theme";
import {
  imageOneStyles,
  imageTwoStyles,
  menuLinkStyles,
  paragraphStyles,
} from "./styles";

export const Footer: FC = () => {
  const renderLinks = () => {
    const links = [
      { href: "#", title: "Privacy Policy" },
      { href: "#", title: "Disclaimers" },
    ];

    return links.map((link, index) => (
      <Fragment key={index}>
        <MenuLink href={link.href} styles={menuLinkStyles}>
          {link.title}
        </MenuLink>
        {index !== links.length - 1 ? "|" : ""}
      </Fragment>
    ));
  };

  const bottomIcons = (
    <>
      <img
        alt="alt_text"
        //@ts-ignore
        border="0"
        height="47"
        src="assets/icons/footerIcons.png"
        style={imageTwoStyles}
        width="124"
      />
      <Spacer height={35} color={colors.primary300} />
    </>
  );

  const logo = (
    <>
      <Spacer height={38} color={colors.primary300} />
      <img
        alt="alt_text"
        //@ts-ignore
        border="0"
        height="42"
        src="assets/images/logoWhite.png"
        style={imageOneStyles}
        width="165"
      />
      <Spacer height={20} color={colors.primary300} />
    </>
  );

  const sectionOne = (
    <>
      <MenuLink href="#" styles={menuLinkStyles}>
        View as web page
      </MenuLink>
      <Paragraph styles={paragraphStyles}>
        To receive any advertised product, you must become a member of PenFed
        Credit Union.
      </Paragraph>
      <Spacer height={20} color={colors.primary300} />
    </>
  );

  const sectionTwo = (
    <>
      <Paragraph styles={paragraphStyles}>PENFED DISCLOSURES:</Paragraph>
      <Paragraph styles={paragraphStyles}>
        * APY (Annual Percentage Yield) is accurate as of November 1, 2021 and
        is subject to change at any time. Fees may reduce earnings.
      </Paragraph>
      <Spacer height={20} color={colors.primary300} />
    </>
  );

  const sectionThree = (
    <>
      <Paragraph styles={paragraphStyles}>
        The rate for our Premium Online Savings Account is over 8x the national
        average of 0.06% APY, based on the national average of savings accounts
        rates published in the FDIC Weekly National Rates and Rate Caps accurate
        as of November 1, 2021.
      </Paragraph>
      <Spacer height={20} color={colors.primary300} />
    </>
  );

  const sectionFour = (
    <>
      <Paragraph styles={paragraphStyles}>
        Questions or comments?{" "}
        <MenuLink href="#" styles={{ ...menuLinkStyles, display: "inline" }}>
          Contact us.
        </MenuLink>
      </Paragraph>
      <Paragraph styles={paragraphStyles}>
        This email has been sent to: XXX. To change your email address, please
        log on at{" "}
        <MenuLink href="#" styles={{ ...menuLinkStyles, display: "inline" }}>
          PenFed.org
        </MenuLink>
        . This will ensure your official records are updated.
      </Paragraph>
      <Spacer height={20} color={colors.primary300} />
    </>
  );

  const sectionFive = (
    <>
      {renderLinks()}
      <Spacer height={20} color={colors.primary300} />
    </>
  );

  const sectionSix = (
    <>
      <Paragraph styles={paragraphStyles}>
        To <strong>UNSUBSCRIBE</strong>, use{" "}
        <MenuLink href="#" styles={{ ...menuLinkStyles, display: "inline" }}>
          this link
        </MenuLink>
        . Please do not reply to this automated message.
      </Paragraph>
      <Spacer height={20} color={colors.primary300} />
    </>
  );

  const sectionSeven = (
    <>
      <Paragraph styles={paragraphStyles}>
        PenFed Credit Union, 7940 Jones Branch Dr, McLean, VA 22102
      </Paragraph>
      <Paragraph styles={paragraphStyles}>
        © 2021 Pentagon Federal Credit Union
      </Paragraph>
      <Spacer height={20} color={colors.primary300} />
    </>
  );

  const socialMediaIcons = (
    <>
      <SocialMediaIconRow
        icons={[
          { href: "#", icon: "assets/icons/fbIcon.png" },
          { href: "#", icon: "assets/icons/liIcon.png" },
          { href: "#", icon: "assets/icons/twIcon.png" },
        ]}
      />
      <Spacer height={40} color={colors.primary300} />
    </>
  );

  const elements = [
    logo,
    socialMediaIcons,
    sectionOne,
    sectionTwo,
    sectionThree,
    sectionFour,
    sectionFive,
    sectionSix,
    sectionSeven,
    bottomIcons,
  ];

  const renderRows = () =>
    elements.map((element, index) => (
      <Row backgroundColor={colors.primary300} key={index}>
        <Column className="responsive-padding">
          <GhostTable width={640}>
            <GhostCell>{element}</GhostCell>
          </GhostTable>
        </Column>
      </Row>
    ));

  return <Table>{renderRows()}</Table>;
};
