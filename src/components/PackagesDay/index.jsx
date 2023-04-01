import Image from 'next/image'
import { ticketTypes } from './data.ts'
import styles from './styles.module.css'

export default function PackagesDay(){



  return (
    <>
    <h1 className={styles.title}>A BEFLY TRAVEL<br/>AGÊNCIA DE VIAGENS OFICIAL DO THE TOWN 2023</h1>
    <section className={styles.PackageGrid}>
      {ticketTypes.map((item) => {
        return (
          <Image
            width={450}
            height={280}
            quality={80}
            key={item.id}
            src={item.imageTicketURL}
            alt={item.titleTicket}
            title={item.titleTicket}
            className={`${styles.imageResponsive} ${styles.imageTicket}`}
          />
        )
      })}
  </section>
  </>
  )
}