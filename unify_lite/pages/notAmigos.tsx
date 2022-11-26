import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link'
import Notificacion from '../components/notAmistad'
import Evento from '../components/notParche'
import styles from '../styles/Login.module.css'
const NotAmigos = () => {
  return (
    <div className={styles.container}>
      <Head>
        <title>Login</title>
        <meta name="description" content="Social Media App" />
        <link rel="icon" href="/Frame.ico" />
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>
         MyUNify
        </h1>
        <div className={styles.avisoAdvertencia}>
          <h1>Ups... esta página no está diseñada para computadores</h1>
          <h2>Por favor ingresa desde un celular</h2>
        </div>
        <Notificacion{...["Usuario 1", "Quiere ser tu amix", "Eliminar"]}> </Notificacion>
        <Evento{...["Parche 1", "xxxxx xxxxxx xxxxx", "xd"]}> </Evento> 
        <section className={styles.Flex1}>
            <button className={styles.botonEstandar}><Link href={"/registro"}>Login</Link> </button>
        </section>
       
      </main>

      <footer className={styles.footer}>
        <p> No tienes cuenta? </p>  <br></br> <a className={styles.linkNegro} href={"/registro"}>Registrate Aquí</a>
      </footer>
    </div>
  )
}

export default NotAmigos;