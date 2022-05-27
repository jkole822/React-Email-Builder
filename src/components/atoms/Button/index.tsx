// React
import { FC } from "react";

// Components
import { Container } from "../Container";
import { Link } from "../Typography";

// Styles
import { buttonStyles } from "./styles";

// Types
import { ButtonProps } from "./types";

export const Button: FC<ButtonProps> = ({
  children,
  containerStyles,
  href,
  styles,
}) => (
  <Container
    backgroundColor={buttonStyles.backgroundColor}
    color={buttonStyles.color}
    padding={buttonStyles.padding}
    styles={containerStyles}
    width="auto"
  >
    <Link href={href} styles={{ ...buttonStyles, ...styles }}>
      {children}
    </Link>
  </Container>
);
