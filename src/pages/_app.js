import '@/styles/globals.css'
import styles from '@/styles/Home.module.css'

import { Montserrat } from 'next/font/google'
import Head from 'next/head'
import Link from 'next/link'
import Image from 'next/image'

import logoBeFly from './../images/logoBeflytravel.png'

const fontMontserrat = Montserrat({ subsets: ['latin'] })

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
      <meta property="og:description" content="Faça seu pré-cadastro e seja um dos primeiros a receber nossos pacotes."/>
      <meta property="og:image" content="https://obj.cdn.theifriend.com/the-town/the-town-social-share.png"/>
      <meta property="og:image:width" content="1200" />
      <meta property="og:image:height" content="675" />
      <meta property="og:site_name" content="iFriend" />
    </Head>


    <main className={fontMontserrat.className}>
      <section className={styles.main}>
        <nav className={styles.Navigation}>
          <Image
            src={logoBeFly}
            alt="Logo BeFly Travel"
            width={117}
            height={34}
          />
          <div className={styles.navigationLinks}>
            <Link href="/">Home</Link>
            <Link href="/product">Pacotes</Link>
          </div>
        </nav>
      </section>
    <Component {...pageProps}/>
    </main>
    </>
  )
}
