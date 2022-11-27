import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link'
import styles from '../styles/Home.module.css'
import parche from '../styles/VistaParches.module.css'
import Info from '../components/infoPerfil'
import Etiqueta from '../components/etiqueta'

const VistaParche = () => {
  return (
    <div className={styles.container}>
      <Head>
        <title>MyUNifyLite</title>
        <meta name="description" content="Social Media App" />
        <link rel="icon" href="/Frame.ico" />
      </Head>
      <header className = {parche.headerPar}>       
          Parche
      </header>
      <div>
        <div className={parche.divFoto}>
  
        </div>
           
        <div className={parche.basicDiv}>
            <h1 className={parche.styleH1}>Lider</h1>
            <h2 className={parche.styleH2}> usuario (link)</h2>
        </div>
        <div className={parche.infoDiv}>
            <Info{...["11", 'Usuarios que parchan']}></Info>
            <Info{...["11", 'Eventos activos']}></Info>
            <Info{...["11", 'Tus amigos en el parche']}></Info>
        </div>
        <div className={parche.infoDiv}>
          <Etiqueta{...["Etiqueta 1"]}> </Etiqueta>
          <Etiqueta{...["Etiqueta 2"]}> </Etiqueta>
          <Etiqueta{...["Etiqueta 3"]}> </Etiqueta>
          <Etiqueta{...["Etiqueta 4"]}> </Etiqueta>

        </div>
      </div>
         
    </div>
  )
}

export default VistaParche
