import Head from "next/head";
import { Footer } from "../components/Footer";

// SIUX Studio @ CSS Extend
import "../public/siux/assets/css/siux.extend.css";
import "../public/siux/assets/css/siux.icon.remixicon.css";

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Head>
        <title>SIUX — Design System</title>
        <meta name="description" content="SIUX — Design System" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Component {...pageProps} />
      <Footer />
    </>
  );
}

export default MyApp;
