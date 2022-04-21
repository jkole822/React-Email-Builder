import { AllHTMLAttributes } from "react";

export interface BgImgWithContentProps extends AllHTMLAttributes<HTMLDivElement> {
    containerStyles?: any;
    imageUrl: string;
    innerContainerStyles?: any;
    msoImageHeight?: number;
    msoImageWidth?: number;
    rowStyles?: any;
}