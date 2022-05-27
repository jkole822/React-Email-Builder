// React
import { FC, useContext } from "react";

// Context
import { CommentContext } from "../../../App";

// Types
import { HiddenMSOProps } from "./types";

export const HiddenMSO: FC<HiddenMSOProps> = ({ children }) => {
  const setComments = useContext(CommentContext);

  return (
    <>
      {setComments && `<!--[if (!mso)&(!IE)]><!-->`}
      {children}
      {setComments && `<!--<![endif]-->`}
    </>
  );
};
