import App from "next/app";
import React from "react";
import Router from "next/router";

class TkdbFrontend extends App {
  static async getInitialProps({ Component, router, ctx }) {
    let pageProps = {};

    if (Component.getInitialProps) {
      pageProps = await Component.getInitialProps(ctx);
    }

    return { pageProps };
  }

  render() {
    const { Component, pageProps, reduxStore } = this.props;
    return (
      <div>
        <Component {...pageProps} />
        <style jsx global>{`
          html,
          body {
            font-family: "Source Sans Pro", sans-serif;
          }

          .text-theme-primary {
            color: #5266E3;
          }
        `}</style>
      </div>
    );
  }
}

export default TkdbFrontend;
