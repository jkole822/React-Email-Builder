// React
import { FC } from "react";

// Styled Components
import { css } from "../../../lib/theme";
import { paragraph, Paragraph } from "./styles";

// Types
import {
  SpanProps,
  TextColorEnum,
  TextProps,
  TextWeightEnum,
} from "./Text.typescript";

const Span: FC<SpanProps> = ({ color, fontFamily, fontSize, children }) => {
  const styles = {
    color: color === TextColorEnum.light ? "$neutral100" : "$neutral200",
    fontFamily,
    fontSize: `${fontSize}px`,
    lineHeight: `${fontSize * 1.4}px`,
  };

  return (
    <span className={css(styles)()} style={styles}>
      {children}
    </span>
  );
};

const Text: FC<TextProps> = ({ color, fontFamily, fontSize, text, weight }) => {
  const renderText = () => {
    if (weight === TextWeightEnum.bold) {
      return (
        <Span color={color} fontFamily={fontFamily} fontSize={fontSize}>
          <strong>{text}</strong>
        </Span>
      );
    }

    return text;
  };

  return (
    <Paragraph className={css(paragraph)()} style={paragraph}>
      <Span color={color} fontFamily={fontFamily} fontSize={fontSize}>
        {renderText()}
      </Span>
    </Paragraph>
  );
};

export default Text;
