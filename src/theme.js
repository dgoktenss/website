import { extendTheme } from "@chakra-ui/react";
import "@fontsource/encode-sans-semi-expanded/800.css"; 
import "@fontsource/open-sans/700.css"; 
import "@fontsource/domine/700.css"; 
import "@fontsource/mandali"

const customTheme = extendTheme({
    fonts: {
        heading: "Encode Sans Semi Expanded",
        body: "Open Sans"
      },
  colors: {
    green: {
        50: "#B1EBC8",  
        100: "#7DD5A1",
        200: "#53BC7D",
        300: "#35A663",
        400: "#189149"
      },
      ssgreen: {
        50: "#99DCC8",  
        100: "#65BEA3",
        200: "#3FA284",
        300: "#269070",
        400: "#127758"
      },
      blue: {
        50:"#E9F6F7",
        100: "#9EAECF",
        200: "#48639C",
        300: "#202F4F",
        400: "#D5DEFD"
      },
      pink: {
        50: "#E9B4B4",
        100: "#DE888C",
        200: "#DE6D72"
      },
      yellow: {
        50: "#FFE7C7",
        100: "#ECB871",
        200: "#EC9222"
      },
      white: {
        50: "#ffffff",
        100: "#F3F6F9",
        200: "#DCE1E5"
      },
      gray: {
        50: "#C5CDD4",
        100: "#666D73",
        200: "#393F45"
      },
      transparent: {
        50: "#ffffff",
        100: "#F3F6F9",
        200: "#DCE1E5"
      },
  }
});

export default customTheme;
