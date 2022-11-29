import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link'
import { FormEvent, useState } from 'react'
import styles from '../../styles/Home.module.css'
const EditarUsuario = () => {

    const [nombre, setNombre] = useState("");
    const [clave, setClave] = useState("");
    const [ig, setIg] = useState("No tiene");


    const onSubmit = (e: FormEvent) => {
        e.preventDefault()


        const eventoPrueba: object = {
            'nombreEvento': nombre,
            'clave': clave,
            'ig': ig
        }

        console.log(eventoPrueba)
        // saveFormData(objetoPrueba);
        //primero hay que entender como funciona esto
        alert('datos subidos');
    }

    async function saveFormData(data: object) {
        return await fetch("/api/formR", {
            body: JSON.stringify(data),
            headers: { "Content-Type": "application/json" },
            method: "POST"
        })
    }

    function molestar() {
        alert('Aqui cambiaria una imagen, si tan solo tuviera una');
    }
    return (
        <div className={styles.container}>
            <Head>
                <title>Editar Usuario</title>
                <meta name="description" content="Social Media App" />
                <link rel="icon" href="/Frame.ico" />
            </Head>

            <main className={styles.main}>
                <div className={styles.cajitaScroll}>
                    <h3 className={styles.subtitle}>
                        <a href={'/perfil/vistaPerfil'}><img width={22} height={22} src={"/back_arrow.svg"} /></a>Editar Usuario
                    </h3>

                    <div className={styles.avisoAdvertencia}>
                        <h1>Ups... esta página no está diseñada para computadores</h1>
                        <h2>Por favor ingresa desde un celular</h2>
                    </div>
                    <div className={styles.circuloUsuario}>
                        <img src={'/circ_mas.svg'} alt={'jijia'} onClick={molestar}></img>
                    </div>
                    <form onSubmit={onSubmit}>
                        <div className={styles.divFila}>
                            <h3>¿Quieres cambiar tu usuario?</h3>
                            <input name={'nom_user'} required={true} onChange={n => setNombre((n.target as HTMLInputElement).value)} />
                        </div>
                        <div className={styles.divFila}>
                            <h3>¿Vas a escoger una contraseña nueva?</h3>
                            <input name={'clave_user'} required={true} onChange={l => setClave((l.target as HTMLInputElement).value)} />
                        </div>
                        <div className={styles.divFila}>
                            <h3>¿Vas a cambiar tu ig?</h3>
                            <input name={'ig_user'} required={true} onChange={d => setIg((d.target as HTMLInputElement).value)} />
                            {/*cambiar por un textfield */}
                        </div>




                        <section className={styles.Flex2}>
                            <button className={styles.botonEstandar} type="submit" onClick={onSubmit}>
                                { /*<Link href={"/evento/crearEvento"}> */}Aceptar{ /*</Link> */} </button>
                            <button className={styles.botonEstandar} type="submit" >
                                <Link href={"/usuario"}> Cancelar</Link>  </button>
                        </section>
                    </form>
                </div>


            </main>


        </div>
    )
}

export default EditarUsuario;
