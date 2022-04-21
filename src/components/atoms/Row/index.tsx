// React
import { Children, cloneElement, FC, isValidElement, useContext } from "react";

// Context
import { CommentContext } from "../../../App";

// Styled Components
import { css } from "../../../lib/theme";
import { Container, InnerContainer, styledRow, StyledRow } from "./styles";

// Types
import { RowProps } from "./Row.typescript";

const Row: FC<RowProps> = ({
  containerStyles,
  imageUrl,
  innerContainerStyles,
  msoImageHeight,
  msoImageWidth,
  numColumns,
  rowStyles,
  children,
}) => {
  const setComments = useContext(CommentContext);

  const childrenWithProps = Children.map(children, (child) => {
    if (isValidElement(child)) {
      return cloneElement(child, { numColumns });
    }

    return child;
  });

  return (
    <Container className={css(containerStyles)()} style={containerStyles}>
      <StyledRow
        className={css(rowStyles)()}
        style={{ ...styledRow, ...rowStyles }}
      >
        <InnerContainer
          className={css(innerContainerStyles)()}
          style={innerContainerStyles}
        >
          {setComments &&
            `<!--[if (mso)|(IE)]><table width="100%" cellpadding="0" cellspacing="0" border="0"><tr><td style="padding: 0px;background-color: transparent;" align="center"><table cellpadding="0" cellspacing="0" border="0" style="width:600px;"><tr style="background-color: ${
              rowStyles?.backgroundColor
                ? rowStyles.backgroundColor
                : "transparent"
            };">${
              imageUrl
                ? `<!--[if gte mso 9]>
            <v:image xmlns:v="urn:schemas-microsoft-com:vml" fill="true" stroke="false" style=" border: 0;display: inline-block; width: ${msoImageWidth}px; height: ${msoImageHeight}px" src="${imageUrl}" />
            <v:rect xmlns:v="urn:schemas-microsoft-com:vml" fill="true" stroke="false" style=" border: 0;display: inline-block;position: absolute; width: ${msoImageWidth}px; height:${msoImageHeight}px">
            <v:fill  opacity="0%" color="#000000”  />
            <v:textbox inset="0,0,0,0">
            `
                : ""
            }<![endif]-->`}
          {childrenWithProps}
          {setComments &&
            `${
              imageUrl
                ? `<!--[if gte mso 9]>
            </v:textbox>
            </v:fill>
            </v:rect>
            </v:image>
            <![endif]-->`
                : ""
            }<!--[if (mso)|(IE)]></tr></table></td></tr></table><![endif]-->`}
        </InnerContainer>
      </StyledRow>
    </Container>
  );
};

export default Row;
