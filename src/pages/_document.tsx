import Document, { Head, Html, Main, NextScript } from "next/document";

export default class UltiDoc extends Document {
  render() {
    return (
      <Html lang="en">
        <Head>
          <meta charSet="utf-8" />
          <link
            rel="icon"
            type="image/png"
            href="https://avatars.githubusercontent.com/u/71897736?v=4"
          />
          <meta name="theme-color" content="#ffffff" />
          <meta
            name="description"
            content="Eliaz Bobadilla, Full–stack and System engineer from Peru"
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
