//@ts-ignore
import { createStitches } from "@stitches/react";
import { colors } from "./color";
import { fonts } from "./fonts";
import { media } from "./media";
import { shadows } from "./shadow";
import { utils } from "./utils";

export const { css, getCssText, styled, theme } = createStitches({
  theme: {
    colors,
    fonts,
    shadows,
  },
  media,
  utils,
});
