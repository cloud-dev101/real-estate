import Router from "next/router";
import Head from "next/head";
import Nprogress from "nprogress";
import { ChakraProvider } from "@chakra-ui/react";
import Layout from "../components/Layout";

function MyApp({ Component, pageProps }) {
  Nprogress.configure({ showSpinner: false });

  Router.events.on("routeChangeStart", () => {
    Nprogress.start();
  });

  Router.events.on("routeChangeComplete", () => {
    Nprogress.done();
  });

  return (
    <>
      <ChakraProvider>
        <Layout>
          <Component {...pageProps} />
        </Layout>
      </ChakraProvider>
    </>
  );
}

export default MyApp;
