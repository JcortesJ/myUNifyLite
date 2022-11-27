import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link'
import { FormEvent, useState } from 'react'
import InputDef from '../components/inputBonito'
import styles from '../styles/Login.module.css'

const Login = () => {
  const [usuario,setUsuario] =useState("");
  const[clave,setClave] = useState("");


  const onSubmit = (e: FormEvent) => {
    e.preventDefault()

    /*este codigo recibe los datos y los convierte a un objeto */

    const objetoPrueba: object = {
        'usuario': usuario,
        'clave': clave,
    }

    console.log(objetoPrueba)
    // saveFormData(objetoPrueba);
    //primero hay que entender como funciona esto
}

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

        <div className={styles.divFila}>
          <h3>Usuario</h3>
          <input onChange={i => setUsuario((i.target as HTMLInputElement).value)}/>
        </div>
        <div className={styles.divFila}>
          <h3>Contraseña</h3>
          <input type={'password'} onChange={i => setClave((i.target as HTMLInputElement).value)}/>
        </div>
        <button className={styles.botonLogin}  onClick={onSubmit}><Link href={"/login"}>Login</Link> </button>
      </main>

      <footer className={styles.footer}>
        <p> No tienes cuenta? </p>  <br></br> <a className={styles.linkNegro} href={"/registro"}>Registrate Aquí</a>
      </footer>
    </div>
  )
}

export default Login;
