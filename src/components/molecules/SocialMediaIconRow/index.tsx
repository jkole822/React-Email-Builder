// React
import { FC } from "react";

// Components
import { SocialMediaIcon } from "../SocialMediaIcon";
import { Row } from "../../atoms/Row";
import { Table } from "../../atoms/Table";

// Types
import { SocialMediaIconRowProps } from "./types";

export const SocialMediaIconRow: FC<SocialMediaIconRowProps> = ({ icons }) => {
  const renderIcons = () =>
    icons.map((icon, index) => (
      <SocialMediaIcon
        displaySpacer={index !== icons.length - 1}
        {...icon}
        key={index}
      />
    ));

  return (
    <Table>
      <Row backgroundColor="transparent">{renderIcons()}</Row>
    </Table>
  );
};
