import { AllHTMLAttributes } from "react";

export interface ButtonProps extends AllHTMLAttributes<HTMLAnchorElement> {
  containerStyles?: any;
  href: string;
  styles?: any;
}
