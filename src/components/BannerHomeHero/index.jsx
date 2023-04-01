import React, { useEffect, useState } from 'react'
import Image from 'next/image'
import styles from './styles.module.css'
import BannerHomeImageDesktop from  'https://obj.cdn.theifriend.com/the-town/img-banner-thetown-home.png'
import BannerHomeImageMobile from  'https://obj.cdn.theifriend.com/the-town/img-banner-thetown-home-mobile.png'

export default function BannerHomeHero(){

  const [widthWindow, setWidth] = useState(1440)

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
      src={widthWindow < 768 ? BannerHomeImageMobile : BannerHomeImageDesktop }
      alt="The Town São Paulo 2023"
      className={styles.imageBannerHome}
    />
  )
}