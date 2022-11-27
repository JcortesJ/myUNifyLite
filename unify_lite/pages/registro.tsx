import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link'
import { FormEvent, useEffect, useState } from 'react'
import InputDef from '../components/inputBonito'
import styles from '../styles/Home.module.css'
import mysql from "mysql2/promise"

const Registro = () => {

    const [nombre, setNombre] = useState("");
    const [clave, setClave] = useState("");
    const [email, setEmail] = useState("");
    const [ig, setIg] = useState("No tiene");
  
//primero debemos crear la conexión
//con la db
async function getPageData() {
    const objetoPrueba: object = {
        'nombre': nombre,
        'clave': clave,
        'ig': ig,
        'email': email
    }
    console.log(objetoPrueba.toString());
    function getRandomInt(max:number) {
        return Math.floor(Math.random() * max);
      }      
    let numero:number = getRandomInt(1000);
    let importancia:number = getRandomInt(100);
    //INSERT INTO Usuario (id_usuario, apodos, clave, correo, instagram, importancia) VALUES
    const insertarPrueba:string = numero.toString()+','+'"'+nombre+'"'+','+'"'+clave+'"'+','+'"'+email+'"'+','+'"'+ig+'"'+','+importancia.toString();
    //
    console.log(insertarPrueba);
    const apiUrlEndpoint = './api/insertarUsuario/'+insertarPrueba;
    const response = await fetch(apiUrlEndpoint)
    const res = await response.json();
    //setdataAmigos(res.datos);
    alert(res.datos);
  } 



  async function actualizarPagina() {
    await getPageData();
    alert('datos creados')
  }
      


   
    
    return (
        <div className={styles.container}>
            <Head>
                <title>Registro</title>
                <meta name="description" content="Social Media App" />
                <link rel="icon" href="/Frame.ico" />
            </Head>

            <main className={styles.main}>
                <div className={styles.cajitaScroll}>
                    <h3 className={styles.subtitle}>
                        <a href={'/login'}><img width={22} height={22} src={"/back_arrow.svg"} /></a>Registro
                    </h3>
                    <div className={styles.avisoAdvertencia}>
                        <h1>Ups... esta página no está diseñada para computadores</h1>
                        <h2>Por favor ingresa desde un celular</h2>
                    </div>
                    <form>
                        <div className={styles.divFila}>
                            <h3>¿Cómo quieres llamarte?</h3>
                            <input name={'nom_user'} required={true} onChange={n => setNombre((n.target as HTMLInputElement).value)} />
                        </div>
                        <div className={styles.divFila}>
                            <h3>Escribe una contraseña</h3>
                            <input name={'clave_user'} required={true} type={'password'} onChange={c => setClave((c.target as HTMLInputElement).value)} />
                        </div>
                        <div className={styles.divFila}>
                            <h3>Escribe tu correo</h3>
                            <input name={'correo_user'} type={email} required={true} onChange={e => setEmail((e.target as HTMLInputElement).value)} />
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
                            <button className={styles.botonEstandar}  onClick={actualizarPagina}>
                                ¡Iniciemos! </button>

                        </section>
                    </form>


                </div>
            </main>


        </div>
    )
}

export default Registro;
