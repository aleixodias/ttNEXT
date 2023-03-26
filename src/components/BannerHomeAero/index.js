import React, { useEffect, useState } from 'react'
import Image from 'next/image'
import styles from './styles.module.css'

import BannerAeroImageDesktop from  'https://obj.cdn.theifriend.com/the-town/img-banner-desktop-aero-thetown-home.png'
import BannerAeroImageMobile from  'https://obj.cdn.theifriend.com/the-town/img-banner-mobile-aero-thetown-home.png'

export default function BannerHomeAero(){

  const [widthWindow, setWidth] = useState(1440)

  useEffect(() => {
    const updateWindowDimensions = () => {
      setWidth(window.innerWidth)
    }

    window.addEventListener("resize", updateWindowDimensions)
  }, [])

  return (
    <>
    {widthWindow}
    <Image
          priority
          quality={80}
          height={480}
          src={widthWindow < 768 ? BannerAeroImageMobile : BannerAeroImageDesktop }
          alt="The Town São Paulo 2023"
          className={styles.imageBannerAero}
        />
    </>
  )
}