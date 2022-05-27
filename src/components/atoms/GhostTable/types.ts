import { AllHTMLAttributes } from "react";
import type { AlignType, VAlignType } from "../../../lib/typescript";

export interface GhostTableProps extends AllHTMLAttributes<HTMLElement> {
  alignment?: AlignType;
  backgroundColor?: string;
  margin?: string | number;
  verticalAlignment?: VAlignType;
  width?: number | string;
}
