import { AllHTMLAttributes } from "react";
import type { AlignType, VAlignType } from "../../../lib/typescript";

export interface ContainerProps extends AllHTMLAttributes<HTMLElement> {
  alignment?: AlignType;
  backgroundColor?: string;
  color?: string;
  margin?: string | number;
  padding?: string | number;
  styles?: any;
  verticalAlignment?: VAlignType;
  width?: string | number;
}
