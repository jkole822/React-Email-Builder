// React
import { FC } from "react";

// Components
import Column from "../../atoms/Column";
import Row from "../../atoms/Row";

// Types
import { BgImgWithContentProps } from "./BgImgWithContent.typescript";
import { ColumnEnum } from "../../../lib/typescript";

const BgImgWithContent: FC<BgImgWithContentProps> = ({
  imageUrl,
  msoImageHeight,
  msoImageWidth,
  children,
}) => (
  <Row
    imageUrl={imageUrl}
    innerContainerStyles={{
      backgroundImage: `url('${imageUrl}')`,
      backgroundPosition: "center top",
      backgroundRepeat: "no-repeat",
    }}
    msoImageHeight={msoImageHeight}
    msoImageWidth={msoImageWidth}
    numColumns={ColumnEnum.one}
  >
    <Column>{children}</Column>
  </Row>
);

export default BgImgWithContent;
