import { extendTheme } from "@chakra-ui/react";

const styles = {
  global: {
    "html, body": {
      color: "white",
      bg: "purple.900",
    },
  },
};
const fonts = {
  heading: "Roboto, sans-serif",
  body: "Roboto, sans-serif",
};

const Heading = {
  variants: {
    primary: {
      fontWeight: "Light",
      letterSpacing: "2px",
    },
  },
};
export const theme = extendTheme({ styles, fonts, component: { Heading } });
