import styles from '@/styles/Home.module.css'

import Head from 'next/head'



export default function Products(){
	return(
		<>
		<Head>
			<title>Produtos | BeFly Travel - The Town São Paulo</title>
		</Head>
		<main className={styles.main}>
		<p>PRODUTOS</p>
		<h1>Modelo de página para produtos</h1>
		</main>
		</>
	)
}