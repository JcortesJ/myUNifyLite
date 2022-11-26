import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link'
import Navbar from '../components/Navbar'
import NavHome from '../components/NavHome'
import styles from '../styles/Login.module.css'
import DivEvento from '../components/DivEvento'
import NavNotif from '../components/barraSup'
import DivAmigo from '../components/divAmigo'

const NotAmigos = () => {
  return (
    <div className={styles.container}>
      <Head>
        <title>Buscar Amigos</title>
        <meta name="description" content="Social Media App" />
        <link rel="icon" href="/Frame.ico" />
      </Head>

      <main className={styles.main}>
      <NavNotif></NavNotif>
       
        <div className={styles.cajitaScroll}>
          <DivAmigo{...['1','2','Usuario 1']}></DivAmigo>
          <DivAmigo{...['5','0','Usuario 2']}></DivAmigo>
          <DivAmigo{...['6','7','Usuario 3']}></DivAmigo>
          <DivAmigo{...['7','0','Usuario 4']}></DivAmigo>
          <DivAmigo{...['8','1','Usuario 5']}></DivAmigo>
          <DivAmigo{...['9','10','Usuario 6']}></DivAmigo>
         

        </div> 
    
      </main>
    </div>
  )
}

export default NotAmigos;