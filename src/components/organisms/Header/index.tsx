// React
import { FC, Fragment } from "react";

// Components
import { Column } from "../../atoms/Column";
import { GhostCell } from "../../atoms/GhostCell";
import { GhostTable } from "../../atoms/GhostTable";
import { MenuLink } from "../../atoms/Typography";
import { Row } from "../../atoms/Row";
import { Spacer } from "../../atoms/Spacer";
import { Table } from "../../atoms/Table";

// Styles
import { columnStyles, imageStyles, menuLinkStyles } from "./styles";

export const Header: FC = () => {
  const renderLinks = () => {
    const links = [
      { href: "#", title: "Checking" },
      { href: "#", title: "Savings" },
      { href: "#", title: "Credit Card" },
      { href: "#", title: "Auto" },
      { href: "#", title: "Mortgages" },
      { href: "#", title: "Personal Loans" },
      { href: "#", title: "Student Loans" },
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

  return (
    <>
      <Spacer height={20} />
      <Table>
        <Row backgroundColor="transparent">
          <Column styles={columnStyles}>
            <GhostTable width={640}>
              <GhostCell>
                <img
                  alt="alt_text"
                  //@ts-ignore
                  border="0"
                  height="50"
                  src="assets/images/logo.png"
                  style={imageStyles}
                  width="198"
                />
                <Spacer height={15} />
              </GhostCell>
            </GhostTable>
          </Column>
        </Row>
        <Row backgroundColor="transparent">
          <Column styles={columnStyles}>
            <GhostTable width={640}>
              <GhostCell>{renderLinks()}</GhostCell>
            </GhostTable>
          </Column>
        </Row>
      </Table>
      <Spacer height={20} />
    </>
  );
};
