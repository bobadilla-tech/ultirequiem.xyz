import Document, { Head, Html, Main, NextScript } from "next/document";

import { COUNTRY, FULL_NAME, PFP } from "../util";

export default class Page extends Document {
  render() {
    return (
      <Html lang="en">
        <Head>
          <meta charSet="utf-8" />
          <link rel="icon" type="image/png" href={PFP} />
          <meta name="theme-color" content="#ffffff" />
          <meta
            name="description"
            content={`${FULL_NAME}, Full–stack Web and System developer from ${COUNTRY}`}
          />
          <link rel="preconnect" href="https://fonts.gstatic.com" />
          <link
            href="https://fonts.googleapis.com/css2?family=Krona+One&family=Roboto:wght@400;700&display=swap"
            rel="stylesheet"
          />
        </Head>
        <body>
          <Main />
          <NextScript />
          <script async src="/theme.js" />
        </body>
      </Html>
    );
  }
}
