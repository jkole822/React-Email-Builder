// React
import { FC } from "react";

// Components
import Column from "../../atoms/Column";
import Container from "../../atoms/Container";
import MenuItem from "../../atoms/MenuItem";
import Row from "../../atoms/Row";

// Types
import { ColumnEnum } from "../../../lib/typescript";

const Header: FC = () => (
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

    <Column>
      <Container>
        <img
          alt="Logo"
          src="https://cdn.templates.unlayer.com/assets/1606906849237-logo.png"
          title="Logo"
          width="160"
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

export default Header;
