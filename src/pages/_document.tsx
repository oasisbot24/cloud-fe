import { Head, Html, Main, NextScript } from "next/document";

export default function Document() {
  return (
    <Html lang="en">
      <Head />
      {process.env.NEXT_PUBLIC_MODE === "development" && (
        <meta name="robots" content="noindex, nofollow" />
      )}

      <link
        rel="stylesheet prefetch"
        href="https://gist.githubusercontent.com/mfd/614e2e80a22b878bde63cb471cbe677e/raw/eef2aabfd0d588d43285431186a0cf70305ceb80/sanfrancisco-font.css"
      />

      <meta name="naver-site-verification" content="25ef148db53f27df80cc82365759cccb2db3c3fc" />
      <script src="https://static.okx.com/cdn/assets/okfe/libs/okxOAuth/index.js" async />

      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
