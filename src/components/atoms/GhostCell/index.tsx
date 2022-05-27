// React
import { FC, useContext } from "react";

// Context
import { CommentContext } from "../../../App";

// Types
import { AlignEnum, VAlignEnum } from "../../../lib/typescript";
import { GhostTableProps } from "./types";

export const GhostCell: FC<GhostTableProps> = ({
  alignment = AlignEnum.center,
  backgroundColor = "inherit",
  color = "inherit",
  children,
  margin = 0,
  padding = 0,
  verticalAlignment = VAlignEnum.middle,
  width = "100%",
}) => {
  const setComments = useContext(CommentContext);

  return (
    <>
      {setComments &&
        `<!--[if (mso)|(IE)]>
        <td 
        align="${alignment}" 
        style="background-color: ${backgroundColor}; color: ${color}; margin: ${margin}; padding: ${padding};"
        valign="${verticalAlignment}" 
        width="${width}"
        >
        <![endif]-->`}
      {children}
      {setComments && `<!--[if (mso)|(IE)]></td><![endif]-->`}
    </>
  );
};
