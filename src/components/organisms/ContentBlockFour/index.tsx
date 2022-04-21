// React
import { FC } from "react";

// Components
import Column from "../../atoms/Column";
import Content from "../../atoms/Content";
import Row from "../../atoms/Row";
import Text from "../../atoms/Text";

// Types
import { ColumnEnum } from "../../../lib/typescript";
import {
  TextColorEnum,
  TextWeightEnum,
} from "../../atoms/Text/Text.typescript";

const ContentBlockFour: FC = () => (
  <Row
    numColumns={ColumnEnum.one}
    rowStyles={{ backgroundColor: "$neutral100" }}
  >
    <Column>
      <Content cellStyles={{ padding: "30px 30px 40px" }}>
        <Text
          color={TextColorEnum.dark}
          fontSize={14}
          text="Lorem ipsum dolor sit amet, consectetur
          adipiscing elit, sed do eiusmod tempor
          incididunt ut labore et dolore magna
          aliqua."
          weight={TextWeightEnum.regular}
        />
      </Content>
    </Column>
  </Row>
);

export default ContentBlockFour;
