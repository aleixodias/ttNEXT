import styles from "./styles.module.css";
import logoBeFly from "../../images/logoBeflytravel.png";
import logoIFriend from "../../images/logoIFriend.svg";
import Image from "next/image";

export default function Footer() {
  return (
    <>
      <div className={styles.mainFull}>
        <section className={styles.main}>
          <div className={styles.left}>
            <Image
              quality={80}
              loading="lazy"
              width={117}
              height={34}
              src={logoBeFly}
              alt="Logo BeFly Travel"
            />
          </div>
          <div className={styles.middle}>
            <p className={styles.title_bold}>Suporte</p>
            <p className={styles.mail}>atendimento@beflytravel.freshdesk.com</p>
          </div>
          <div className={styles.right}>
            <Image
              quality={80}
              loading="lazy"
              width={117}
              height={34}
              src={logoIFriend}
              alt="Logo iFriend Travel"
            />
          </div>
        </section>
      </div>
    </>
  );
}
