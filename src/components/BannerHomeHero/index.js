import { useEffect, useState } from 'react'
import Image from 'next/image'
import styles from './styles.module.css'

import BannerHomeImageDesktop from  'https://obj.cdn.theifriend.com/the-town/img-banner-thetown-home.png'
import BannerHomeImageMobile from  'https://obj.cdn.theifriend.com/the-town/img-banner-thetown-home-mobile.png'

export default function BannerHomeHero(){

  const [widthWindow, setWidth] = useState(0)

  useEffect(() => {
    const updateWindowDimensions = () => {
      setWidth(window.innerWidth)
    }

    window.addEventListener("resize", updateWindowDimensions)
  }, [setWidth])

  return (
    <Image
          priority
          quality={80}
          height={480}
          src={widthWindow < 768 ? BannerHomeImageMobile : BannerHomeImageDesktop }
          alt="The Town São Paulo 2023"
          className={styles.imageBannerHome}
        />
  )
}