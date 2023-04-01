import Link from 'next/link'
import Image from 'next/image'
import logoBeFly from '../../images/logoBeflytravel.png'
import styles from './style.module.css'

export default function NavigationHeader(){
  return(
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
        <Link href="/faq">Central de ajuda</Link>
      </div>
  </nav>
  )
}