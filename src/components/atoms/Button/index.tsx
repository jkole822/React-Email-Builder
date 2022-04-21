// React
import { FC, useContext } from "react";

// Context
import { CommentContext } from "../../../App";

// Styled Components
import { css } from "../../../lib/theme";
import {
  outerTextContainer,
  OuterTextContainer,
  styledButton,
  StyledButton,
  textStyleObj,
  Text,
  textContainer,
  TextContainer,
} from "./styles";

// Types
import { AlignEnum } from "../../../lib/typescript";
import {
  ButtonColorEnum,
  ButtonProps,
  ButtonSizeEnum,
  ButtonWeightEnum,
} from "./Button.typescript";

const Button: FC<ButtonProps> = ({
  buttonStyles,
  color,
  link,
  msoSpacing,
  outerTextContainerStyles,
  size,
  textContainerStyles,
  textStyles,
  weight,
}) => {
  const setComments = useContext(CommentContext);

  const renderText = () => {
    const text = (
      <Text
        className={css(textStyles)()}
        style={{ ...textStyleObj, ...textStyles }}
      >
        {link.text}
      </Text>
    );
    if (weight === ButtonWeightEnum.bold) {
      return <strong>{text}</strong>;
    }

    return text;
  };

  return (
    <>
      {setComments &&
        `<!--[if (mso)|(IE)]><table><tbody><tr><td style="margin: ${msoSpacing}"><![endif]-->`}
      <StyledButton
        className={["mso-border-alt", css(buttonStyles)()].join(" ")}
        href={link.href}
        style={{ ...styledButton, ...buttonStyles }}
        target="_blank"
      >
        <OuterTextContainer
          className={css(outerTextContainer)()}
          style={{ ...outerTextContainer, ...outerTextContainerStyles }}
        >
          <tr>
            <TextContainer
              align={AlignEnum.center}
              className={css(textContainerStyles)()}
              color={color}
              size={size}
              style={{
                ...textContainer,
                ...textContainerStyles,
                ...{
                  backgroundColor:
                    color === ButtonColorEnum.light
                      ? "$neutral100"
                      : "$neutral200",
                  color:
                    color === ButtonColorEnum.light
                      ? "$neutral200"
                      : "$neutral100",
                  padding:
                    size === ButtonSizeEnum.small ? "10px 20px" : "12px 22px",
                },
              }}
            >
              {renderText()}
            </TextContainer>
          </tr>
        </OuterTextContainer>
      </StyledButton>
      {setComments &&
        `<!--[if (mso)|(IE)]></td></tr></tbody></table><![endif]-->`}
    </>
  );
};

export default Button;
