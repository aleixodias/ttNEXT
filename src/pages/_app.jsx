import { Analytics } from "@vercel/analytics/react";
import { Montserrat } from "next/font/google";

import "@/styles/globals.css";
import styles from "@/styles/Home.module.css";

import Head from "next/head";
import NavigationHeader from "@/components/NavigationHeader";
import Footer from "@/components/Footer";

const fontMontserrat = Montserrat({ subsets: ["latin"] });

export default function App({ Component, pageProps }) {
  return (
    <>
      <Head>
        <title>BeFly Travel - The Town São Paulo</title>
        <link rel="icon" href="/icon.png" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="description" content="BeFly Travel - The Town São Paulo" />
        <meta property="og:type" content="website" />
        <meta property="og:title" content="BeFly Travel - The Town São Paulo" />
        <meta
          property="og:description"
          content="Faça seu pré-cadastro e seja um dos primeiros a receber nossos pacotes."
        />
        <meta
          property="og:image"
          content="https://obj.cdn.theifriend.com/the-town/the-town-social-share.png"
        />
        <meta property="og:image:width" content="1200" />
        <meta property="og:image:height" content="675" />
        <meta property="og:site_name" content="iFriend" />
      </Head>

      <main className={fontMontserrat.className}>
        <section className={styles.main}>
          <NavigationHeader />
        </section>
        <Component {...pageProps} />
        <Footer />
        <Analytics />
      </main>
    </>
  );
}
