import Head from 'next/head'

import styles from '@/styles/Home.module.css'

import StepByStep from '@/components/StepByStep'
import BannerHomeHero from '@/components/BannerHomeHero'
import PackagesDay from '@/components/PackagesDay'
import BannerHomeAero from '@/components/BannerHomeAero'

export default function Home() {

  return (
    <>
      <Head>
        <title>BeFly Travel - The Town São Paulo</title>
      </Head>
      <BannerHomeHero />
        <main className={styles.main}>
          <PackagesDay />
          <StepByStep />
        </main>
      <BannerHomeAero />
    </>
  )
}
