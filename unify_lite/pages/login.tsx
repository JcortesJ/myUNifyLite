import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link'
import InputDef from '../components/inputBonito'
import styles from '../styles/Login.module.css'

const Login = () => {
  return (
    <div className={styles.container}>
      <Head>
        <title>Login</title>
        <meta name="description" content="Social Media App" />
        <link rel="icon" href="/Frame.ico" />
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>
         MyUnify
        </h1>
        <div className={styles.avisoAdvertencia}>
          <h1>Ups... esta página no está diseñada para computadores</h1>
          <h2>Por favor ingresa desde un celular</h2>
        </div>
        <InputDef {...["Usuario"]}></InputDef>
        <InputDef {...["Contraseña"]}></InputDef>

        <Link href={"/home"}><button>Login</button></Link> 
       
      </main>

      <footer className={styles.footer}>
        <p> No tienes cuenta? </p>  <br></br> <a className={styles.linkNegro} href={"/registro"}>Registrate Aquí</a>
      </footer>
    </div>
  )
}

export default Login;
