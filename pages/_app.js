import "../styles/globals.scss";

// 1. import `NextUIProvider` component
import { NextUIProvider } from "@nextui-org/react";
import { lightTheme } from "../themes/ligthTheme";
import { UiProvider } from "../context/ui";

function MyApp({ Component, pageProps }) {
  return (
    // 2. Use at the root of your app
    <NextUIProvider theme={lightTheme}>
      <UiProvider>
        <Component {...pageProps} />
      </UiProvider>
    </NextUIProvider>
  );
}

export default MyApp;
