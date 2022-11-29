import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link'
import Navbar from '../../components/Navbar'
import NavHome from '../../components/NavHome'
import NotiEvento from '../../components/NotiEvento'
import styles from '../../styles/Login.module.css'
import DivEvento from '../../components/DivEvento'

const HomeBusqueda = () => {


  

  return (
    <div className={styles.container}>
      <Head>
        <title>Home</title>
        <meta name="description" content="Social Media App" />
        <link rel="icon" href="/Frame.ico" />
      </Head>

      <main className={styles.main}>
      <div className={styles.homeHeader}>
      <Link href='/home/home' className='h-full w-1/5'>
            <div className='h-full flex content-center items-center justify-center '>
            <i className="fa-solid fa-arrow-left hover:text-orange transition-all h-fit"></i>
            </div>
        </Link>
        <div className='h-full w-3/5 flex content-center items-center justify-center font-titillium'>
            <input type="text" id="search" name="search" placeholder='Buscar' className='cajaBusqueda '/>
        </div>
        <Link href='/home/homeBusqueda' className='h-full w-1/5'>
            <div className='h-full lineaSeleccionado flex content-center items-center justify-center '>
            <i className="fa-solid text-xl fa-magnifying-glass h-fit hover:text-orange transition-all"></i>
            </div>
        </Link>
        
        </div> 
        <div className={styles.contenidoHome}>
          <NotiEvento></NotiEvento>
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

export default HomeBusqueda;