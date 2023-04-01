import Image from "next/image";
import { Steps } from './data.ts'
import styles from "./styles.module.css";

export default function StepByStep({ TitleContent, SubTitleContent }) {

  return (
    <>
      <div>
        <h1 className={styles.title}>
          Para garantir o seu pacote para o The Town é muito simples:
        </h1>
        <h2 className={styles.stepByStepTitle}>PASSO A PASSO</h2>
      </div>
      <section className={styles.StepByStepGrid}>
        {Steps.map((item) => (
          <div key={item.id} className={styles.stepItem}>
            <Image
              width={80}
              height={80}
              quality={80}
              src={item.imageStepURL}
              alt={item.stepContent}
              title={item.stepContent}
              className={`${styles.imageResponsive} ${styles.imageTicket}`}
            />
            <p>
              {item.stepContent}
              <br />
              <small>{item.StepContentSmall && item.StepContentSmall}</small>
            </p>
          </div>
        ))}
      </section>
    </>
  );
}
