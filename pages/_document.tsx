import { Html, Head, Main, NextScript } from "next/document";
import Script from "next/script";

export default function Document() {
  return (
    <Html lang="ja">
      <Head>
        <Script
          src="https://www.googletagmanager.com/gtag/js?id=G-J7MNFPHZLX"
          strategy="afterInteractive"
        />
        <Script
        src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-3899772527131729"
          strategy="afterInteractive"
        />
        <Script
          id="google-analytics"
          strategy="afterInteractive"
          dangerouslySetInnerHTML={{
            __html: `window.dataLayer = window.dataLayer || [];function gtag(){dataLayer.push(arguments);}gtag('js', new Date());gtag('config', 'G-J7MNFPHZLX');`,
          }}
        />
        <meta httpEquiv="content-type" content="text/html" />
        <meta httpEquiv="content-language" content="ja" />
        <meta name="application-name" content="markone" />
        <meta name="author" content="markone3to1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
