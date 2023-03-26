import Image from 'next/image'

import styles from './styles.module.css'

export default function PackagesDay(){

  const ticketTypes =[
    {
      "id": 1,
      "titleTicket": "Ticket 1 dia de ingresso",
      "imageTicketURL": 'https://obj.cdn.theifriend.com/the-town/package-01.png'
    }, {
      "id": 2,
      "titleTicket": "Ticket 2 dias de ingresso",
      "imageTicketURL": 'https://obj.cdn.theifriend.com/the-town/package-02.png'
    }, {
      "id": 3,
      "titleTicket": "Ticket 3 dias de ingresso",
      "imageTicketURL": 'https://obj.cdn.theifriend.com/the-town/package-03.png'
    },
    {
      "id": 4,
      "titleTicket": "Ticket VIP 1 dia de ingresso",
      "imageTicketURL": 'https://obj.cdn.theifriend.com/the-town/package-VIP-01.png'
    }, {
      "id": 5,
      "titleTicket": "Ticket VIP 2 dias de ingresso",
      "imageTicketURL": 'https://obj.cdn.theifriend.com/the-town/package-VIP-02.png'
    }, {
      "id": 6,
      "titleTicket": "Ticket VIP 3 dias de ingresso",
      "imageTicketURL": 'https://obj.cdn.theifriend.com/the-town/package-VIP-03.png'
    }
  ]

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
            data-aos="fade-up"
          />
        )
      })}
  </section>
  </>
  )
}