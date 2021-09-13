import "../styles/globals.css";
import type { AppProps } from "next/app";
import Head from "next/head";
import React from "react";
import NavBar from "../common/components/navBar/NavBar";
import { Toaster } from "react-hot-toast";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <div>
      <Head>
        <title>Ben Chomsang</title>
      </Head>
      <Toaster/>
      <NavBar />
      <Component {...pageProps} />
    </div>
  );
}
export default MyApp;
