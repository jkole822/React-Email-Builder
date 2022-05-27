import { AllHTMLAttributes } from "react";
import { ColumnSize } from "../../../lib/typescript";
import type { AlignType, VAlignType } from "../../../lib/typescript";

export interface ColumnProps extends AllHTMLAttributes<HTMLElement> {
  alignment?: AlignType;
  columnSize?: ColumnSize;
  customColumnSize?: number;
  isThinColumn?: boolean;
  outerContainerStyles?: any;
  styles?: any;
  verticalAlignment?: VAlignType;
}
