import { AllHTMLAttributes } from "react";

export interface TypographyProps extends AllHTMLAttributes<HTMLElement> {
  styles?: any;
}

export interface LinkProps extends TypographyProps {
  href: string;
}
