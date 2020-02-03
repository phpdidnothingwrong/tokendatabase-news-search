import Document, { Head, Main, NextScript } from "next/document";
import { Fragment } from "react";

class MyDocument extends Document {
  render() {
    return (
      <html>
        <Head>
          <meta charSet="utf-8" />
          <meta
            name="viewport"
            content="width=device-width, initial-scale=1, shrink-to-fit=no"
          />
          <meta name="msapplication-TileColor" content="#2d89ef" />
          <meta
            name="description"
            content="Search aggregated crypto news via TokenDatabase's API."
          />
          <meta
            name="msapplication-config"
            content="/favicon/browserconfig.xml"
          />
          <meta name="theme-color" content="#ffffff" />
          <link
            rel="stylesheet"
            href={`https://fonts.googleapis.com/css?family=Source+Sans+Pro:300,400,600,700,900&display=swap`}
          />
          <link
            rel="stylesheet"
            href={`https://stackpath.bootstrapcdn.com/bootstrap/4.4.1/css/bootstrap.min.css`}
          />
          <title>TokenDatabase News Search</title>
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </html>
    );
  }
}

export default MyDocument;
