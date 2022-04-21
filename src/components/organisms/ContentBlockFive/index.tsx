// React
import { FC } from "react";

// Components
import BgImgWithContent from "../../molecules/BgImgWithContent";
import Button from "../../atoms/Button";
import Content from "../../atoms/Content";
import Text from "../../atoms/Text";

// Types
import { AlignEnum } from "../../../lib/typescript";
import {
  ButtonColorEnum,
  ButtonSizeEnum,
  ButtonWeightEnum,
} from "../../atoms/Button/Button.typescript";
import {
  TextColorEnum,
  TextWeightEnum,
} from "../../atoms/Text/Text.typescript";

const ContentBlockFive: FC = () => (
  <BgImgWithContent
    imageUrl="https://cdn.templates.unlayer.com/assets/1606937518713-ASASS.png"
    msoImageHeight={350}
    msoImageWidth={600}
  >
    <Content
      cellAlign={AlignEnum.left}
      cellStyles={{ padding: "60px 30px 0px" }}
    >
      <Text
        color={TextColorEnum.light}
        fontSize={32}
        text="ABOUT OUR"
        weight={TextWeightEnum.bold}
      />
      <Text
        color={TextColorEnum.light}
        fontSize={32}
        text="PRODUCT"
        weight={TextWeightEnum.bold}
      />
    </Content>
    <Content
      cellAlign={AlignEnum.left}
      cellStyles={{ padding: "22px 30px 10px" }}
    >
      <Text
        color={TextColorEnum.light}
        fontSize={14}
        text="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Enim ad minim veniam, quis nostrud exercitation ullamco."
        weight={TextWeightEnum.regular}
      />
    </Content>
    <Content
      cellAlign={AlignEnum.left}
      cellStyles={{ padding: "10px 30px 40px" }}
    >
      <Button
        color={ButtonColorEnum.light}
        link={{ href: "https://google.com", text: "VIEW MORE" }}
        msoSpacing="0 30px"
        outerTextContainerStyles={{ margin: "0px" }}
        size={ButtonSizeEnum.large}
        weight={ButtonWeightEnum.bold}
      />
    </Content>
  </BgImgWithContent>
);

export default ContentBlockFive;
