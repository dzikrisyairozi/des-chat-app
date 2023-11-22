import { Head, Html, Main, NextScript } from 'next/document';

const fonts = [
  '/fonts/OpenSauceOne/OpenSauceOne-Regular.woff2',
  '/fonts/OpenSauceOne/OpenSauceOne-Italic.woff2',
  '/fonts/OpenSauceOne/OpenSauceOne-Semibold.woff2',
  '/fonts/OpenSauceOne/OpenSauceOne-SemiboldItalic.woff2',
  '/fonts/OpenSauceOne/OpenSauceOne-Bold.woff2',
  '/fonts/OpenSauceOne/OpenSauceOne-BoldItalic.woff2',
];

export default function Document() {
  return (
    <Html lang='en'>
      <Head>
        {fonts.map((font) => (
          <link
            key={font}
            rel='preload'
            href={font}
            as='font'
            type='font/woff2'
            crossOrigin='anonymous'
          />
        ))}
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
