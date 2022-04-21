//@ts-ignore
import { globalCss } from "@stitches/react";

export const globalStylesObject = {
  html: {
    color: "$neutral200",
    fontFamily: "$sansSerif",
  },

  body: {
    backgroundColor: "$primary100",
    color: "$neutral200",
    fontFamily: "$sansSerif",
  },

  h1: {
    fontFamily: "$serif",
  },

  h2: {
    fontFamily: "$serif",
  },

  h3: {
    fontFamily: "$serif",
  },

  h4: {
    fontFamily: "$serif",
  },

  h5: {
    fontFamily: "$serif",
  },

  h6: {
    fontFamily: "$serif",
  },
}

export const globalStyles = globalCss(globalStylesObject);
