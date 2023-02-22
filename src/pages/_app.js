import { NextUIProvider } from '@nextui-org/react';
// Styles
import '@/styles/globals.css';
// Themes
import { darkTheme } from '@/themes';

export default function App({ Component, pageProps }) {

  return (
    <NextUIProvider theme={ darkTheme }>
      <Component {...pageProps} />
    </NextUIProvider>
  );
}
