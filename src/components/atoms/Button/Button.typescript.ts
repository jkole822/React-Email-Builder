export enum ButtonColorEnum {
  light = "light",
  dark = "dark",
}

export enum ButtonSizeEnum {
  small = "small",
  large = "large",
}

export enum ButtonWeightEnum {
  regular = "regular",
  bold = "bold",
}

export type ButtonColor = ButtonColorEnum.dark | ButtonColorEnum.light;

export type ButtonSize = ButtonSizeEnum.small | ButtonSizeEnum.large;

export type ButtonWeight = ButtonWeightEnum.regular | ButtonWeightEnum.bold;

export interface Link {
  href: string;
  text: string;
}

export interface ButtonProps {
  buttonStyles?: any;
  color: ButtonColor;
  link: Link;
  msoSpacing?: string;
  outerTextContainerStyles?: any;
  size: ButtonSize;
  textContainerStyles?: any;
  textStyles?: any;
  weight: ButtonWeight;
}
