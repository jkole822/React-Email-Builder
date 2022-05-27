import { AllHTMLAttributes } from "react";

export interface SpacerProps extends AllHTMLAttributes<HTMLElement> {
  color?: string;
  height: number;
}
