import { AllHTMLAttributes } from "react";

export interface Link {
  href: string;
  text: string;
}

export interface PromoCardProps extends AllHTMLAttributes<HTMLDivElement> {
  imageAlt?: string;
  imageUrl: string;
  link: Link;
}
