import { AllHTMLAttributes } from "react";

export interface RowProps extends AllHTMLAttributes<HTMLElement> {
  backgroundColor: string;
  innerContainerStyles?: any;
  outerContainerStyles?: any;
}
