import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link'
import { FormEvent, useState } from 'react'
import InputDef from '../components/inputBonito'
import styles from '../styles/Home.module.css'
import mysql from "mysql2/promise"

const Registro = () => {

    const [nombre, setNombre] = useState("");
    const [clave, setClave] = useState("");
    const [email, setEmail] = useState("");
    const [ig, setIg] = useState("No tiene");
   /*
    async function insertion(Query: any, values: any) {
        const dbconnection = await mysql.createConnection({
          host: 'localhost',
          database: 'myunify',
          user: 'root',
          port: 3306,
          password: 'toor'
        });
        try {
          //await dbconnection.query(query, [values]);
          dbconnection.query(Query,[values]);
         
          //console.log(results);
          dbconnection.end();
      
        } catch (error: any) {
          throw Error(error.message);
      
        }
      }
      */

//primero debemos crear la conexión
//con la db

      


    const onSubmit = (e: FormEvent) => {
        e.preventDefault()



        const objetoPrueba: object = {
            'nombre': nombre,
            'clave': clave,
            'ig': ig,
            'email': email
        }

        console.log(objetoPrueba)
     //   saveFormData();
        //primero hay que entender como funciona esto
     
        
    }
    /*
    async function saveFormData() {
        try{
            //intentamos hacer nuestra query
            const query:string = 'INSERT INTO Creador (id_creador, nombre_creador) VALUES ?';           
            const values:any[] = [999,nombre];
            //esta parte ejecuta nuestra consulta por medio de una funcion asincrona
            const data = await insertion(query,values);
            //res.status(200).json({resultado: data});
            console.log(data);
            //terminamos la conexión por seguridad
            //mostramos en el frontend los valores

        } catch(error:any)
        {
            console.log(error.message);
        }
    }
    */
    
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
                    <form onSubmit={onSubmit} method='POST' action='api/Usuarios' >
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
                            <button className={styles.botonEstandar} type="submit" onClick={onSubmit}>
                                <Link href={"/login"}>¡Iniciemos!</Link> </button>

                        </section>
                    </form>


                </div>
            </main>


        </div>
    )
}

export default Registro;
