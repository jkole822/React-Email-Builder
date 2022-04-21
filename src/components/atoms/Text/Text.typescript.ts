import { AllHTMLAttributes } from "react";

export enum TextColorEnum {
  light = "light",
  dark = "dark",
}

export enum TextWeightEnum {
  regular = "regular",
  bold = "bold",
}

export type TextColor = TextColorEnum.light | TextColorEnum.dark;

export type TextWeight = TextWeightEnum.regular | TextWeightEnum.bold;

export interface SpanProps extends AllHTMLAttributes<HTMLDivElement> {
  color: TextColor;
  fontFamily?: string;
  fontSize: number;
}

export interface TextProps {
  color: TextColor;
  fontSize: number;
  fontFamily?: string;
  text: string;
  weight: TextWeight;
}
