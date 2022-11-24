import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link'
import { FormEvent, useState } from 'react'
import styles from '../../styles/Home.module.css'
const CrearEvento = () => {

    const [nombre, setNombre] = useState("");
    const [lugar, setLugar] = useState("");
    const [descripcion, setDes] = useState("");
    const [hora, setHora] = useState("12");
    const [dia, setDia] = useState("");
    const [facultad, setFacultad] = useState("No tiene facultad");


    const onSubmit =  (e: FormEvent) => {
        e.preventDefault()



        const eventoPrueba: object = {
            'nombreEvento':nombre,
            'lugar':lugar,
            'descripcion':descripcion,
            'hora':parseInt(hora),
            'dia':dia,
            'facultad':facultad
        }

        console.log(eventoPrueba)
       // saveFormData(objetoPrueba);
       //primero hay que entender como funciona esto
       alert('datos subidos');
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
                <title>Crear Evento</title>
                <meta name="description" content="Social Media App" />
                <link rel="icon" href="/Frame.ico" />
            </Head>

            <main className={styles.main}>
                <h3 className={styles.subtitle}>
                    <a href={'/login'}><img width={22} height={22} src={"/back_arrow.svg"} /></a>Crear Evento 📒
                </h3>
            
                <div className={styles.avisoAdvertencia}>
                    <h1>Ups... esta página no está diseñada para computadores</h1>
                    <h2>Por favor ingresa desde un celular</h2>
                </div>
                <div className={styles.rectanguloNaranja}></div>
                <form onSubmit={onSubmit}>
                    <div className={styles.divFila}>
                        <h3>¿Cómo lo vas a llamar?</h3>
                        <input name={'nom_ev'} required={true} onChange={n => setNombre((n.target as HTMLInputElement).value)}  />
                    </div>
                    <div className={styles.divFila}>
                        <h3>¿Donde será?</h3>
                        <input name={'lugar_ev'} required={true} onChange={l => setLugar((l.target as HTMLInputElement).value)}  />
                    </div>
                    <div className={styles.divFila}>
                        <h3>Describe tu evento</h3>
                        <textarea name={'desc_ev'} required={true} onChange={d => setDes((d.target as HTMLTextAreaElement).value)}  />
                        {/*cambiar por un textfield */}
                    </div>
                    <div className={styles.divFila}>
                        <h3>¿A qué horas será tu evento?</h3>
                        <input name={'hor_ev'} required={true} onChange={h => setHora((h.target as HTMLInputElement).value)}  />
                        {/*cambiar por un textfield */}
                    </div>
                    <div className={styles.divFila}>
                        <h3>¿Qué dia estamos listos? 👀</h3>
                        <input name={'dia_ev'} required={true} type={'date'} onChange={di => setDia((di.target as HTMLInputElement).value)}  />
                    </div>

                    <div className={styles.divFila}>
                        <h3>¿Qué facultad organiza esto? </h3>
                        <input name={'fac_ev'} required={true}  onChange={f => setFacultad((f.target as HTMLInputElement).value)}  />
                    </div>
                    
                    <footer className={styles.footerNotMain}>
                        <p> <input type={'checkbox'} /> Mi evento cumple con las normas de la comunidad </p>

                    </footer>
                    <section className={styles.Flex1}>
                        <button className={styles.botonEstandar} type="submit" onClick={onSubmit}>
                            { /*<Link href={"/evento/crearEvento"}> */}¡Hazlo realidad!{ /*</Link> */} </button>
                    </section>
                </form>


            </main>


        </div>
    )
}

export default CrearEvento;
