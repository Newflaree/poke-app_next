import { NextUIProvider } from '@nextui-org/react';
// Styles
import '@/styles/globals.css';

export default function App({ Component, pageProps }) {

  return (
    <NextUIProvider>
      <Component {...pageProps} />
    </NextUIProvider>
  );
}
