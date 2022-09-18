import { Html, Head, Main, NextScript } from "next/document";

export default function Document() {
  return (
    <Html>
      <Head>
        <meta http-equiv="content-type" content="text/html" />
        <meta http-equiv="content-language" content="ja" />
        <meta name="application-name" content="markone" />
        <meta name="author" content="markone3to1" />
        <meta name="viewport" content="width=device-width,initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
