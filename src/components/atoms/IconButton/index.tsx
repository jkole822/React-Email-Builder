// React
import { FC, useContext } from "react";

// Context
import { CommentContext } from "../../../App";

// Styled Components
import { css } from "../../../lib/theme";
import {
  cell,
  Cell,
  imageStyles,
  Image,
  table,
  Table,
  tableRow,
  TableRow,
} from "./styles";

// Types
import { AlignEnum } from "../../../lib/typescript";
import { IconButtonProps } from "./IconButton.typescript";

const IconButton: FC<IconButtonProps> = ({
  cellStyles,
  icon,
  iconStyles,
  link,
  tableStyles,
  tableRowStyles,
}) => {
  const setComments = useContext(CommentContext);
  return (
    <>
      {setComments &&
        `<!--[if (mso)|(IE)]><td width="32" style="width:32px; padding-right: 10px;" valign="top" align="center"><![endif]-->
`}
      <Table
        className={["mso-line-space", css(tableStyles)()].join(" ")}
        style={{ ...table, ...tableStyles }}
        width="32"
      >
        <tbody>
          <TableRow style={{ ...tableRow, ...tableRowStyles }}>
            <Cell
              align={AlignEnum.center}
              className={["mso-table-space", css(cellStyles)()].join(" ")}
              style={{ ...cell, ...cellStyles }}
            >
              <a
                href={link.href}
                rel="noreferrer"
                title={link.text}
                target="_blank"
              >
                <Image
                  className={css(imageStyles)()}
                  style={{ ...imageStyles, ...iconStyles }}
                  src={icon}
                  alt={link.text}
                  title={link.text}
                  width="32"
                />
              </a>
            </Cell>
          </TableRow>
        </tbody>
      </Table>
      {setComments && `<!--[if (mso)|(IE)]></td><![endif]-->`}
    </>
  );
};

export default IconButton;
