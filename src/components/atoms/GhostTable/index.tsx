// React
import { FC, useContext } from "react";

// Context
import { CommentContext } from "../../../App";

// Types
import { AlignEnum, VAlignEnum } from "../../../lib/typescript";
import { GhostTableProps } from "./types";

export const GhostTable: FC<GhostTableProps> = ({
  alignment = AlignEnum.center,
  backgroundColor = "transparent",
  children,
  margin = 0,
  verticalAlignment = VAlignEnum.middle,
  width = "100%",
}) => {
  const setComments = useContext(CommentContext);

  return (
    <>
      {setComments &&
        `<!--[if (mso)|(IE)]>
          <table 
          align="${alignment}"
          border="0" 
          cellpadding="0" 
          cellspacing="0" 
          role="presentation" 
          style="margin: ${margin}"
          valign="${verticalAlignment}"
          width="${width}" 
          >
          <tr style="background-color: ${backgroundColor}">
          <![endif]-->`}
      {children}
      {setComments && `<!--[if (mso)|(IE)]></tr></table><![endif]-->`}
    </>
  );
};
