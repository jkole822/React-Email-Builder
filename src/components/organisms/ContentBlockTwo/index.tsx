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

const ContentBlockTwo: FC = () => (
  <Row
    numColumns={ColumnEnum.one}
    rowStyles={{ backgroundColor: "$neutral100" }}
  >
    <Column>
      <Content cellStyles={{ padding: "40px 10px 10px" }}>
        <Text
          color={TextColorEnum.dark}
          fontFamily="$serif"
          fontSize={24}
          text="Purchasing Focal Just Got Easier"
          weight={TextWeightEnum.bold}
        />
      </Content>
      <Content cellStyles={{ padding: "0px 10px 40px" }}>
        <Text
          color={TextColorEnum.dark}
          fontSize={14}
          text="Lorem ipsum dolor sit amet"
          weight={TextWeightEnum.regular}
        />
      </Content>
    </Column>
  </Row>
);

export default ContentBlockTwo;
