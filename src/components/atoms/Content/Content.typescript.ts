import { AllHTMLAttributes } from "react";
import { AlignType } from "../../../lib/typescript";

export interface ContentProps extends AllHTMLAttributes<HTMLDivElement> {
    cellAlign?: AlignType;
    cellStyles?: any;
    containerStyles?: any;
    tableStyles?: any;
}