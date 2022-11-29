import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link'
import Notificacion from '../components/notAmistad'
import Evento from '../components/notParche'
import NavSup from '../components/supNotAmigo' 
import Navbar from '../components/Navbar'
import styles from '../styles/Login.module.css'
const NotAmigos = () => {
  return (
    <div className={styles.container}>
      <Head>
        <title>Solicitudes</title>
        <meta name="description" content="Social Media App" />
        <link rel="icon" href="/Frame.ico" />
      </Head>

      <main className={styles.main}>
      <nav className={styles.divNavSup}>
        
          <div className={styles.divCurrentVision}>
      <Link href={"/notAmigos"}>
          Solicitudes
          </Link>
        </div>
       
          
    
        <div className={styles.divNotCurrent}>
        <Link href={"/evento/notEventos"}>
                Eventos
                </Link>
            </div>
            
    </nav>
        <div className={styles.cajitaScroll2}>
        <Notificacion{...["Usuario 1", "Quiere ser tu amix", "Eliminar"]}> </Notificacion>
        <Notificacion{...["Usuario 2", "Quiere ser tu amix", "Eliminar"]}> </Notificacion>
        <Notificacion{...["Usuario 3", "Quiere ser tu amix", "Eliminar"]}> </Notificacion>
        <Notificacion{...["Usuario 4", "Quiere ser tu amix", "Eliminar"]}> </Notificacion>
  
        </div>
      </main>

      <Navbar></Navbar>
    </div>
  )
}

export default NotAmigos;