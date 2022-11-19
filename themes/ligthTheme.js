import { createTheme, NextUIProvider, Text } from "@nextui-org/react";

export const lightTheme = createTheme({
  type: "light", // it could be "light" or "dark"
  theme: {
    colors: {
      // brand colors
      primaryLight: "$red200",
      primaryLightHover: "$red300",
      primaryLightActive: "$red400",
      primaryLightContrast: "$red600",
      primary: "#4ADE7B",
      primaryBorder: "$red500",
      primaryBorderHover: "$red600",
      primarySolidHover: "$red700",
      primarySolidContrast: "$white",
      primaryShadow: "$red500",

      gradient: "linear-gradient(115.46deg, #FA1519 27.4%, #2F0604 78.94%);",
      link: "#f9f9f9",

      // you can also create your own color
      myColor: "#ff4ecd",

      // ...  more colors
    },
    space: {},
    fonts: {},
  },
});
