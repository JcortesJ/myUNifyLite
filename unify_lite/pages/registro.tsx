import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link'
import { FormEvent, useState } from 'react'
import InputDef from '../components/inputBonito'
import styles from '../styles/Home.module.css'
const Registro = () => {

    const [nombre, setNombre] = useState("");
    const [clave, setClave] = useState("");
    const [email, setEmail] = useState("");
    const [ig, setIg] = useState("No tiene");

    const onSubmit =  (e: FormEvent) => {
        e.preventDefault()

    

        const objetoPrueba: object = {
            'nombre': nombre,
            'clave': clave,
            'ig': ig,
            'email': email
        }

        console.log(objetoPrueba)
       // saveFormData(objetoPrueba);
       //primero hay que entender como funciona esto
    }

    async function saveFormData(data: object) {
        return await fetch("/api/formR", {
            body: JSON.stringify(data),
            headers: {"Content-Type": "application/json"},
            method: "POST"
        })
    }
    return (
        <div className={styles.container}>
            <Head>
                <title>Registro</title>
                <meta name="description" content="Social Media App" />
                <link rel="icon" href="/Frame.ico" />
            </Head>

            <main className={styles.main}>
                <h3 className={styles.subtitle}>
                    <a href={'/login'}><i className={"fa-solid fa-music text-xl lineaNegra"}> </i></a>Registro
                </h3>
                <div className={styles.avisoAdvertencia}>
                    <h1>Ups... esta página no está diseñada para computadores</h1>
                    <h2>Por favor ingresa desde un celular</h2>
                </div>
                <form onSubmit={onSubmit}>
                    <div className={styles.divFila}>
                        <h3>¿Cómo quieres llamarte?</h3>
                        <input name={'nom_user'} required={true} onChange={n => setNombre((n.target as HTMLInputElement).value)}  />
                    </div>
                    <div className={styles.divFila}>
                        <h3>Escribe una contraseña</h3>
                        <input name={'clave_user'} required={true} type={'password'} onChange={c => setClave((c.target as HTMLInputElement).value)}   />
                    </div>
                    <div className={styles.divFila}>
                        <h3>Escribe tu correo</h3>
                        <input name={'correo_user'} type={email}  required={true} onChange={e => setEmail((e.target as HTMLInputElement).value)}  />
                    </div>
                    <div className={styles.divFila}>
                        <h3>Escribe tu ig (Si tienes)</h3>
                        <input name={'ig_user'} required={true} onChange={i => setIg((i.target as HTMLInputElement).value)} />
                    </div>
                    <footer className={styles.footerNotMain}>
                        <p> <input type={'checkbox'} /> Acepto los términos y condiciones de uso de la aplicación. </p>  <br></br> <a className={styles.linkNegro} href={"../data/policy"}>
                            Politica de tratamiento de datos</a>

                    </footer>
                    <section className={styles.Flex1}>
                        <button className={styles.botonEstandar} type="submit" onClick={onSubmit}>
                            <Link href={"/login"}>¡Iniciemos!</Link> </button>
                            
                    </section>
                </form>


            </main>


        </div>
    )
}

export default Registro;
