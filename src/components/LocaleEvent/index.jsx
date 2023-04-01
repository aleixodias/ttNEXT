import styles from './styles.module.css'

export default function LocaleEvent(){
  return(
    <main className={styles.main}>
      <h1 className={styles.localeTitle}>SÃO PAULO • SP • BR</h1>
      <p className={styles.localeDescription}>ZONA SUL • AUTÓDROMO DE INTERLAGOS</p>
      <p className={styles.localeDescription}>2, 3, 7, 9 e 10 SETEMBRO 2023</p>
    </main>
  )
}