import Head from "next/head";
import React from "react";
import "../styles/globals.css";

const MyApp = ({ Component, pageProps }) => (
  <>
    <Head>
      <title>Rigelstorm</title>
      <meta name="viewport" content="initial-scale=1.0, width=device-width" />
    </Head>
    <Component {...pageProps} />
  </>
);

export default MyApp;
