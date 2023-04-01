import styles from "./styles.module.css";

export default function NumbersEvent() {
  return (
    <>
      <div className={styles.mainFull}>
        <section className={styles.main}>
          <div className={styles.event_item}>
            <h2 className={styles.title}>+235</h2>
            <p className={styles.description}>HORAS DE MÚSICA</p>
          </div>
          <div className={styles.event_item}>
            <h2 className={styles.title}>500</h2>
            <p className={styles.description}>MIL PESSOAS</p>
          </div>
          <div className={styles.event_item}>
            <h2 className={styles.title}>6</h2>
            <p className={styles.description}>PALCOS</p>
          </div>
          <div className={styles.event_item}>
            <h2 className={styles.title}>360</h2>
            <p className={styles.description}>MIL METROS QUADRADOS</p>
          </div>
        </section>
      </div>
    </>
  );
}
