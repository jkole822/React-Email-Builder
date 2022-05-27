import { AllHTMLAttributes } from "react";
import type { AlignType, VAlignType } from "../../../lib/typescript";

export interface GhostTableProps extends AllHTMLAttributes<HTMLElement> {
  alignment?: AlignType;
  backgroundColor?: string;
  color?: string;
  margin?: string | number;
  padding?: string | number;
  verticalAlignment?: VAlignType;
  width?: string | number;
}
