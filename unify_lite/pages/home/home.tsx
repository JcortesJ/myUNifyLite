import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link'
import Navbar from '../../components/Navbar'
import Opciones from '../../components/Opciones'
import NotiEvento from '../../components/NotiEvento'
import styles from '../../styles/Login.module.css'
import DivEvento from '../../components/DivEvento'

const Home = () => {
  return (
    <div className={styles.container}>
      <Head>
        <title>Home</title>
        <meta name="description" content="Social Media App" />
        <link rel="icon" href="/Frame.ico" />
      </Head>

      <main className={styles.main}>
      <div className={styles.homeHeader}>
        <div className='lineaNegra lineaSeleccionado h-full font-titillium text-xl w-2/5 flex content-center items-center justify-center'>
          Para tí
        </div>
        <Link href='/home/homeSeguidos' className='h-full w-2/5'>
          <div className='lineaNegra h-full font-titillium text-xl flex content-center items-center justify-center text-black'>
            Seguidos
          </div> 
        </Link>
        <Link href='/home/homeBusqueda' className='h-full w-1/5'>
            <div className='h-full  flex content-center items-center justify-center '>
            <i className="  fa-solid text-xl fa-magnifying-glass h-fit hover:text-orange transition-all"></i>
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

export default Home;