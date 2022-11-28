import type { NextPage } from 'next'
import Head from 'next/head'
import Link from 'next/link'
import Evento from '../components/notParche'
import NavSup from '../components/supBuscParche' 
import Navbar from '../components/Navbar'
import styles from '../styles/Login.module.css'
const NotParche = () => {
  return (
    <div className={styles.container}>
      <Head>
        <title>Parches</title>
        <meta name="description" content="Social Media App" />
        <link rel="icon" href="/Frame.ico" />
      </Head>

      <main className={styles.main}>
       <div className={styles.cajitaScroll}>
       <NavSup></NavSup>
        <Evento{...["Parche 1", "xxxxx xxxxxx xxxxx", "xd"]}> </Evento> 
        <Evento{...["Parche 2", "xxxxx xxxxxx xxxxx", "xd"]}> </Evento> 
        <Evento{...["Parche 3", "xxxxx xxxxxx xxxxx", "xd"]}> </Evento> 
        <Evento{...["Parche 4", "xxxxx xxxxxx xxxxx", "xd"]}> </Evento> 
       </div>

       
      </main>

      <Navbar></Navbar>
    </div>
  )
}

export default NotParche;