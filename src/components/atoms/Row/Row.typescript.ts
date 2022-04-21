import { AllHTMLAttributes } from "react";
import { NumColumns } from "../../../lib/typescript";

export interface RowProps extends AllHTMLAttributes<HTMLDivElement> {
    containerStyles?: any;
    rowStyles?: any;
    imageUrl?: string;
    innerContainerStyles?: any;
    msoImageHeight?: number;
    msoImageWidth?: number;
    numColumns: NumColumns;
}