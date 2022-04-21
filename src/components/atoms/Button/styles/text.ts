import { styled } from "../../../../lib/theme";

import { ButtonColorEnum, ButtonSizeEnum } from "../Button.typescript";

export const outerTextContainer = {
  border: 0,
  cellPadding: "0",
  cellSpacing: "0",
  margin: '0 auto'
};

export const textContainer = {
  display: "block",
  lineHeight: "120%",
};

export const textStyleObj = {
  fontSize: "14px",
  lineHeight: "16.8px",
};

export const OuterTextContainer = styled("table", {
  ...outerTextContainer,
});

export const TextContainer = styled("td", {
  ...textContainer,

  variants: {
    color: {
      [ButtonColorEnum.light]: {
        backgroundColor: "$neutral100",
        color: "$neutral200",
      },
      [ButtonColorEnum.dark]: {
        backgroundColor: "$neutral200",
        color: "$neutral100",
      },
    },
    size: {
        [ButtonSizeEnum.small]: {
            padding: '10px 20px'
        },
        [ButtonSizeEnum.large]: {
            padding: '12px 22px'
        }
    }
  },
});

export const Text = styled("span", {
  ...textStyleObj,
});
