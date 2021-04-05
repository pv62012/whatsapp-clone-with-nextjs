import Head from 'next/head'
import styles from '../styles/Home.module.css'

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>WhatsApp</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main>
        <h2>
          this is first nextjs
             why are you at <center>this should be cool</center>
        </h2>
       </main>
    
      <footer className={styles.footer}>
  
      </footer>
    </div>
  )
}
