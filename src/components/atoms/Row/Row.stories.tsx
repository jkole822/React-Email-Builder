import { ComponentMeta } from "@storybook/react";
import Column from "../Column";
import Container from "../Container";
import MenuItem from "../MenuItem";
import Row from ".";
import { ColumnEnum } from "../../../lib/typescript";

export default {
  title: "Atoms/Row",
  component: Row,
} as ComponentMeta<typeof Row>;

export const ThreeColumn = () => (
  <Row
    numColumns={ColumnEnum.three}
    rowStyles={{ backgroundColor: "$neutral100" }}
  >
    <Column>
      <Container>
        <MenuItem link={{ href: "https://google.com", text: "News" }} />
        <MenuItem link={{ href: "https://google.com", text: "Service" }} />
      </Container>
    </Column>

    <Column columnStyles={{ verticalAlign: "middle" }}>
      <Container>
        <img
          alt="Logo"
          src="https://cdn.templates.unlayer.com/assets/1606906849237-logo.png"
          title="Logo"
          width="200"
        />
      </Container>
    </Column>

    <Column>
      <Container>
        <MenuItem link={{ href: "https://google.com", text: "About" }} />
        <MenuItem link={{ href: "https://google.com", text: "Contact" }} />
      </Container>
    </Column>
  </Row>
);
