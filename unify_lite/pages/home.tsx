import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link'
import Navbar from '../components/Navbar'
import NavHome from '../components/NavHome'
import styles from '../styles/Login.module.css'
import DivEvento from '../components/DivEvento'

const Home = () => {
  return (
    <div className={styles.container}>
      <Head>
        <title>Home</title>
        <meta name="description" content="Social Media App" />
        <link rel="icon" href="/Frame.ico" />
      </Head>

      <main className={styles.main}>
        <NavHome></NavHome> 
        <div className={styles.contenidoHome}>
          <DivEvento></DivEvento> 

          <DivEvento></DivEvento> 
          <DivEvento></DivEvento> 
          <DivEvento></DivEvento> 
          <DivEvento></DivEvento> 
          <DivEvento></DivEvento> 
          <DivEvento></DivEvento> 
          
          <DivEvento></DivEvento> 

        </div>
        <Navbar></Navbar>
      </main>
    </div>
  )
}

export default Home;