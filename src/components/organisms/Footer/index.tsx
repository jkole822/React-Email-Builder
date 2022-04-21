// React
import { FC } from "react";

// Components
import Column from "../../atoms/Column";
import Container from "../../atoms/Container";
import Content from "../../atoms/Content";
import EmptySpace from "../../atoms/EmptySpace";
import IconButton from "../../atoms/IconButton";
import Row from "../../atoms/Row";
import Text from "../../atoms/Text";

// Types
import { ColumnEnum } from "../../../lib/typescript";
import {
  TextColorEnum,
  TextWeightEnum,
} from "../../atoms/Text/Text.typescript";

const Footer: FC = () => (
  <>
    <Row
      numColumns={ColumnEnum.one}
      rowStyles={{ backgroundColor: "$neutral100" }}
    >
      <Column>
        <Content cellStyles={{ padding: "16px" }}>
          <EmptySpace />
        </Content>
      </Column>
    </Row>
    <Row
      numColumns={ColumnEnum.one}
      rowStyles={{ backgroundColor: "$primary200" }}
    >
      <Column>
        <Content cellStyles={{ padding: "20px 10px" }}>
          <Text
            color={TextColorEnum.light}
            fontSize={14}
            text="FOLLOW US ON"
            weight={TextWeightEnum.bold}
          />
        </Content>
      </Column>
    </Row>
    <Row
      numColumns={ColumnEnum.one}
      rowStyles={{ backgroundColor: "$primary200" }}
    >
      <Column>
        <Container>
          <Content cellStyles={{ padding: "0px 0px 30px" }}>
            <IconButton
              icon="https://cdn.tools.unlayer.com/social/icons/circle-white/facebook.png"
              link={{ href: "https://facebook.com", text: "Facebook" }}
              tableStyles={{ display: "inline-block", marginRight: "10px" }}
            />
            <IconButton
              icon="https://cdn.tools.unlayer.com/social/icons/circle-white/twitter.png"
              link={{ href: "https://twitter.com", text: "Twitter" }}
              tableStyles={{ display: "inline-block" }}
            />
            <IconButton
              icon="https://cdn.tools.unlayer.com/social/icons/circle-white/twitter.png"
              link={{ href: "https://twitter.com", text: "Twitter" }}
              tableStyles={{ display: "inline-block", marginLeft: "10px" }}
            />
          </Content>
        </Container>
      </Column>
    </Row>
  </>
);

export default Footer;
