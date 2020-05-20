import App from "next/app";
import React from "react";

import "%styleguide/main.scss";

export default class MyApp extends App {
  render(): JSX.Element {
    const { Component, pageProps } = this.props;

    return <Component {...pageProps} />;
  }
}
