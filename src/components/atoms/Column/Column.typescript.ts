import { AllHTMLAttributes } from "react";
import { AlignType, NumColumns } from "../../../lib/typescript";

export interface ColumnProps extends AllHTMLAttributes<HTMLDivElement> {
    cellAlign?: AlignType;
    cellStyles?: any;
    columnStyles?: any;
    containerStyles?: any;
    innerContainerStyles?: any;
    numColumns?: NumColumns;
}