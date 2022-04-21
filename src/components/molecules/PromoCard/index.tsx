// React
import { FC } from "react";

// Components
import Button from "../../atoms/Button";
import Content from "../../atoms/Content";

// Types
import { PromoCardProps } from "./PromoCard.typescript";
import {
  ButtonColorEnum,
  ButtonSizeEnum,
  ButtonWeightEnum,
} from "../../atoms/Button/Button.typescript";

const PromoCard: FC<PromoCardProps> = ({
  imageAlt,
  imageUrl,
  link,
  children,
}) => (
  <>
    <Content cellStyles={{ padding: "10px" }}>
      <img alt={imageAlt} src={imageUrl} title={imageAlt} width="100%" />
    </Content>
    {children}
    <Content cellStyles={{ padding: "10px" }}>
      <Button
        color={ButtonColorEnum.dark}
        link={link}
        size={ButtonSizeEnum.small}
        weight={ButtonWeightEnum.regular}
      />
    </Content>
  </>
);

export default PromoCard;
