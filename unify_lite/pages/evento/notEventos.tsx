import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link'
import Notificacion from '../../components/notAmistad'
import Evento from '../../components/notParche'
import NavSup from '../../components/supNotAmigo' 
import Navbar from '../../components/Navbar'
import styles from '../../styles/Login.module.css'
import NotiEvento from '../../components/NotiEvento'
const NotEventos = () => {
  return (
    <div className={styles.container}>
      <Head>
        <title>Solicitudes</title>
        <meta name="description" content="Social Media App" />
        <link rel="icon" href="/Frame.ico" />
      </Head>

      <main className={styles.main}>
      <nav className={styles.divNavSup}>
      
        <div className={styles.divNotCurrent}>
        <Link href={"/notAmigos"}>
         Solicitudes
         </Link>
      </div>
      
        
      <div className={styles.divCurrentVision}>
      <Link href={"/eventos/notEventos"}>

              Eventos
              </Link>    
          </div>
          
    </nav>
        <div className={styles.cajitaScroll2}>
        <NotiEvento {...["0", "2", "4"]}></NotiEvento>
  
        </div>
      </main>

      <Navbar></Navbar>
    </div>
  )
}

export default NotEventos;