import React, { useEffect, useState } from 'react'
import Image from 'next/image'
import styles from './styles.module.css'

import BannerAeroImageDesktop from  'https://obj.cdn.theifriend.com/the-town/img-banner-desktop-aero-thetown-home.png'
import BannerAeroImageMobile from  'https://obj.cdn.theifriend.com/the-town/img-banner-mobile-aero-thetown-home.png'

export default function BannerHomeAero(){

  const [widthWindow, setWidth] = useState(425)

  useEffect(() => {
    const updateWindowDimensions = () => {
      const newWidth = window.innerWidth;

      setWidth(newWidth)
    }
    updateWindowDimensions()
    window.addEventListener("resize", updateWindowDimensions)
    return () => window.removeEventListener("resize", updateWindowDimensions)



  }, [])

  return (
    <Image
      placeholder="blur"
      loading="lazy"
      quality={80}
      // width={widthWindow}
      height={480}
      src={widthWindow < 768 ? BannerAeroImageMobile : BannerAeroImageDesktop }
      alt="The Town São Paulo 2023"
      className={styles.imageBannerAero}
    />
  )

}