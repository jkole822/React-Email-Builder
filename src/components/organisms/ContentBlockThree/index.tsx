// React
import { FC } from "react";

// Components
import Column from "../../atoms/Column";
import Content from "../../atoms/Content";
import PromoCard from "../../molecules/PromoCard";
import Row from "../../atoms/Row";
import Text from "../../atoms/Text";

// Types
import { ColumnEnum } from "../../../lib/typescript";
import {
  TextColorEnum,
  TextWeightEnum,
} from "../../atoms/Text/Text.typescript";

const ContentBlockThree: FC = () => (
  <Row
    numColumns={ColumnEnum.two}
    rowStyles={{ backgroundColor: "$neutral100" }}
  >
    <Column>
      <PromoCard
        imageUrl="https://cdn.templates.unlayer.com/assets/1606934810497-02.png"
        link={{ href: "https://google.com", text: "Buy Now" }}
      >
        <Content cellStyles={{ padding: "10px 10px px", marginBottom: "1px" }}>
          <Text
            color={TextColorEnum.dark}
            fontSize={16}
            text="Lorem"
            weight={TextWeightEnum.bold}
          />
        </Content>
        <Content cellStyles={{ padding: "10px" }}>
          <Text
            color={TextColorEnum.dark}
            fontSize={16}
            text="$20"
            weight={TextWeightEnum.bold}
          />
        </Content>
      </PromoCard>
    </Column>
    <Column>
      <PromoCard
        imageUrl="https://cdn.templates.unlayer.com/assets/1606932761674-2.jpg"
        link={{ href: "https://google.com", text: "Buy Now" }}
      >
        <Content cellStyles={{ padding: "10px 10px 0px", marginBottom: "1px" }}>
          <Text
            color={TextColorEnum.dark}
            fontSize={16}
            text="Ipsum"
            weight={TextWeightEnum.bold}
          />
        </Content>
        <Content cellStyles={{ padding: "10px" }}>
          <Text
            color={TextColorEnum.dark}
            fontSize={16}
            text="$25"
            weight={TextWeightEnum.bold}
          />
        </Content>
      </PromoCard>
    </Column>
  </Row>
);

export default ContentBlockThree;
