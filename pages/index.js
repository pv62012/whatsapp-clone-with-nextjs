import Head from 'next/head'
import Sidebar from '../components/Sidebar'

export default function Home() {
  return (
    <div>
      <Head>
        <title>WhatsApp</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main>
   
         <Sidebar/>
       </main>
    
      <footer >
  
      </footer>
    </div>
  )
}
