// React
import { FC, useContext } from "react";

// Context
import { CommentContext } from "../../../App";

// Types
import { ContainerProps } from "./Container.typescript";

const Container: FC<ContainerProps> = ({ children }) => {
  const setComments = useContext(CommentContext);

  return (
    <>
      {setComments &&
        `<!--[if (mso)|(IE)]><table role="presentation" border="0" cellpadding="0" cellspacing="0" align="center"><tr><![endif]-->`}
      {children}
      {setComments && `<!--[if (mso)|(IE)]></tr></table><![endif]-->`}
    </>
  );
};

export default Container;
