import styles from './styles.module.css'

export default function TitleSection({contentTitle}){
	return <h1 className={styles.title}>{contentTitle}</h1>
}