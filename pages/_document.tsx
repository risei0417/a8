import { CommonConstant } from "constants/common";
import { Html, Head, Main, NextScript } from "next/document";
import Script from "next/script";

export default function Document() {
  return (
    <Html lang="en">
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
        <meta httpEquiv="content-language" content="en" />
        <meta name="application-name" content={CommonConstant.APP_NAME} />
        <meta name="author" content={CommonConstant.MAIN_AUTHOR} />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
