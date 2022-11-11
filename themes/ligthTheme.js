import { createTheme, NextUIProvider, Text } from "@nextui-org/react";

export const lightTheme = createTheme({
  type: "light", // it could be "light" or "dark"
  theme: {
    colors: {
      // brand colors
      primaryLight: "$orange200",
      primaryLightHover: "$orange300",
      primaryLightActive: "$orange400",
      primaryLightContrast: "$orange600",
      primary: "#4ADE7B",
      primaryBorder: "$orange500",
      primaryBorderHover: "$orange600",
      primarySolidHover: "$orange700",
      primarySolidContrast: "$white",
      primaryShadow: "$orange500",

      gradient:
        "linear-gradient(112deg, $blue100 -25%, $pink500 -10%, $purple500 80%)",
      link: "#f9f9f9",

      // you can also create your own color
      myColor: "#ff4ecd",

      // ...  more colors
    },
    space: {},
    fonts: {},
  },
});
