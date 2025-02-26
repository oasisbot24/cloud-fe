import { Head, Html, Main, NextScript } from "next/document";

import GoogleAnalytics from "@/components/googleAnalytics/GoogleAnalytics";

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
      <script src="https://static.okx.com/cdn/assets/okfe/libs/okxOAuth/index.js" async />

      <body>
        <GoogleAnalytics gaId="G-35VD71EPTP" gtmId="GTM-TBMTZ7W3" />
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
