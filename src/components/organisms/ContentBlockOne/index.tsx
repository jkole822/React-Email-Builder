// React
import { FC } from "react";

// Components
import BgImgWithContent from "../../molecules/BgImgWithContent";
import Button from "../../atoms/Button";
import Content from "../../atoms/Content";
import EmptySpace from "../../atoms/EmptySpace";
import Text from "../../atoms/Text";

// Types
import {
  ButtonColorEnum,
  ButtonSizeEnum,
  ButtonWeightEnum,
} from "../../atoms/Button/Button.typescript";
import {
  TextColorEnum,
  TextWeightEnum,
} from "../../atoms/Text/Text.typescript";

const ContentBlockOne: FC = () => (
  <BgImgWithContent
    imageUrl="https://cdn.templates.unlayer.com/assets/1606924485372-1.jpg"
    msoImageHeight={400}
    msoImageWidth={600}
  >
    <Content cellStyles={{ padding: "150px 10px 10px" }}>
      <EmptySpace />
    </Content>
    <Content cellStyles={{ padding: "10px" }}>
      <Text
        color={TextColorEnum.light}
        fontSize={44}
        text="NEW ARRIVAL"
        weight={TextWeightEnum.bold}
      />
    </Content>
    <Content cellStyles={{ padding: "10px 10px 50px" }}>
      <Button
        color={ButtonColorEnum.light}
        link={{ href: "https://google.com", text: "VIEW MORE" }}
        size={ButtonSizeEnum.large}
        weight={ButtonWeightEnum.bold}
      />
    </Content>
  </BgImgWithContent>
);

export default ContentBlockOne;
