// React
import { FC, useContext } from "react";

// Context
import { CommentContext } from "../../../App";

// Styled Components
import { css } from "../../../lib/theme";
import { linkStyleObj, Link } from "./styles";

// Types
import { MenuItemProps } from "./MenuItem.typescript";

const MenuItem: FC<MenuItemProps> = ({ link, linkStyles }) => {
  const setComments = useContext(CommentContext);

  return (
    <>
      {setComments &&
        `<!--[if (mso)|(IE)]><td style="padding: ${
          linkStyles?.padding ? linkStyles.padding : linkStyleObj.padding
        }"><![endif]-->`}
      <Link
        className={css({ linkStyles })()}
        href={link.href}
        style={{ ...linkStyles, ...linkStyleObj }}
      >
        {link.text}
      </Link>
      {setComments && `<!--[if (mso)|(IE)]></td><![endif]-->`}
    </>
  );
};

export default MenuItem;
