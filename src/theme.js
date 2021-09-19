import { extendTheme } from "@chakra-ui/react";
import "@fontsource/encode-sans-semi-expanded/700.css"; 
import "@fontsource/open-sans/800.css"; 
import "@fontsource/mandali"

const customTheme = extendTheme({
    fonts: {
        heading: "Open Sans",
        body: "Mandali"
      },
  colors: {
    green: {
        50: "#BCE0C5",  
        100: "#53BC7D",
        200: "#3FA285"
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
      }
  }
});

export default customTheme;
