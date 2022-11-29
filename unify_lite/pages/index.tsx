import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link'
import { useEffect, useState } from 'react'
import styles from '../styles/Home.module.css'

const Home: NextPage = () => {
 
  return (
    <div className={styles.container}>
      <Head>
        <title>MyUnifyLite</title>
        <meta name="description" content="Social Media App" />
        <link rel="icon" href="/Frame.ico" />
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>
         MyUnify Lite
        </h1>
        <div className={styles.avisoAdvertencia}>
          <h1>Ups... esta página no está diseñada para computadores</h1>
          <h2>Por favor ingresa desde un celular</h2>
        </div>
        <div className={styles.imagenLogo}></div>


        <Link href={"/login"}><button className='w-52'>Login </button></Link>
        <Link href={"/registro"}><button className='w-52'>Registrate</button></Link>  
       

      </main>

      <footer className={styles.footer}>
      <img src='./Frame.ico' width={50} height={50}></img> <p>MyUNify, un proyecto de <strong>MyUNify</strong></p>
      </footer>
    </div>
  )
}

export default Home


