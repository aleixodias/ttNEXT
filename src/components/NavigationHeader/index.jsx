import Link from "next/link"
import Image from "next/image"
import logoBeFly from "../../images/logoBeflytravel.png"
import styles from "./style.module.css"

export default function NavigationHeader() {
  return (
    <nav className={styles.Navigation}>
      <Image
        loading="lazy"
        width={117}
        height={34}
        src={logoBeFly}
        alt="Logo BeFly Travel"
      />
      <div className={styles.navigationLinks}>
        <Link href="/">Home</Link>
        <Link href="/product">Pacotes</Link>
        <Link href="/faq">Central de ajuda</Link>
      </div>
    </nav>
  );
}
