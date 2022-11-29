import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link'
import { FormEvent, useEffect, useRef, useState } from 'react'
import styles from '../../styles/Home.module.css'
import { useUser } from '../../contexts/user'
import { useAuth } from '../../contexts/auth'

const CrearEvento = () => {

    const [nombreE, setNombre] = useState("");
    const [lugar, setLugar] = useState("");
    const [descripcion, setDes] = useState("");
    const [hora, setHora] = useState("12");
    const [dia, setDia] = useState("");
    const [facultad, setFacultad] = useState("No tiene facultad");
    const { user, setUser } = useUser();
    const [dataEvento, setDataE] = useState<any[]>([]);
    const { auth, setAuth } = useAuth();
    const input1 = useRef<HTMLInputElement>(null);
    const verificarEvento =
        //una promesa es una función que ocurrira eventualmente o nunca
        async () => {
            const apiUrlEndpoint2 = '../../api/buscarEventoH';
            const response = await fetch(apiUrlEndpoint2)
            const res2 = await response.json();
            setDataE(res2.datos);
            //console.log(dataEvento);
            dataEvento.map(indice => {
                //traemos los datos
                let nombreVerificar = indice.nombre;
                //los guardamos en un array
                if (nombreVerificar === nombreE) {
                    alert('Ya existe un evento con este nombre')
                    if (input1.current != null) {
                        input1.current.value = '';
                        setNombre('');
                    }
                    return;

                    //previene un loop
                }
            });
        }

    async function getPageData() {
        setDia(dia.replaceAll('-', '/'))
        const eventoPrueba: object = {
            'nombreEvento': nombreE,
            'lugar': 'lugar random',
            'descripcion': descripcion,
            'hora': parseInt(hora),
            'dia': dia,
            'facultad': facultad
        }

        console.log(eventoPrueba) 
        function getRandomInt(max: number) {
            return Math.floor(Math.random() * max);
        }
        
        let lugarI: number = getRandomInt(23);
        if(lugarI<17) lugarI=17;
        let ID = getRandomInt(1000).toString();
        let id_not = getRandomInt(1000).toString();
        const insertarPrueba: string = ID+','+id_not+','+user?.toString()+ ',' +lugarI.toString()+','+ '"' + nombreE + '"' +','+ '"' + descripcion + '"' + ',' + hora.toString() + ',' + '"' + dia + '"' + ',' + '"' + facultad + '"';
        //'INSERT INTO EVENTO(id_evento,Notificacion_id_notificacion,Creador_id_creador,Lugar_id_lugar,nombre,descripcion,hora,fecha,facultad) VALUES ('+req.query.inserE+')';
        console.log(insertarPrueba);
        const apiUrlEndpoint = '../api/insertarEvento/' + insertarPrueba;
        const response = await fetch(apiUrlEndpoint)
        const res = await response.json();
        //alert(res.datos);
    }

    useEffect(() => {
        //Se ejecuta cada vez que haya un cambio en nombreE
        verificarEvento()
    }, [nombreE]);


    const actualizarPagina = async (e: FormEvent) => {
        e.preventDefault()

        if (nombreE != '') {
            await getPageData();
            // saveFormData(objetoPrueba);
            //primero hay que entender como funciona esto
            alert('datos subidos');
            if(input1.current != null){
                input1.current.value = '';
            }   
        }

        else {
            alert('ingresa un nombre valido');
            if (input1.current != null) {
                input1.current.value = '';
            }
        }

    }



    return (
        <div className={styles.container}>
            <Head>
                <title>Crear Evento</title>
                <meta name="description" content="Social Media App" />
                <link rel="icon" href="/Frame.ico" />
            </Head>

            <main className={styles.main}>
                <div className={styles.cajitaScroll}>
                    <h3 className={styles.subtitle}>
                        <a href={'/login'}><img width={22} height={22} src={"/back_arrow.svg"} /></a>Crear Evento 📒
                    </h3>

                    <div className={styles.avisoAdvertencia}>
                        <h1>Ups... esta página no está diseñada para computadores</h1>
                        <h2>Por favor ingresa desde un celular</h2>
                    </div>
                    <div className={styles.rectanguloNaranja}></div>
                    <form>
                        <div className={styles.divFila}>
                            <h3>¿Cómo lo vas a llamar?</h3>
                            <input ref={input1} title={'nom_ev'} required={true} onChange={n => setNombre((n.target as HTMLInputElement).value)} />
                        </div>
                        <div className={styles.divFila}>
                            <h3>¿Donde será?</h3>
                            <input title={'lugar_ev'} required={true} onChange={l => setLugar((l.target as HTMLInputElement).value)} />
                        </div>
                        <div className={styles.divFila}>
                            <h3>Describe tu evento</h3>
                            <textarea title={'desc_ev'} required={true} onChange={d => setDes((d.target as HTMLTextAreaElement).value)} />
                            {/*cambiar por un textfield */}
                        </div>
                        <div className={styles.divFila}>
                            <h3>¿A qué horas será tu evento?</h3>
                            <input title={'hor_ev'} required={true} onChange={h => setHora((h.target as HTMLInputElement).value)} />
                            {/*cambiar por un textfield */}
                        </div>
                        <div className={styles.divFila}>
                            <h3>¿Qué dia estamos listos? 👀</h3>
                            <input title={'dia_ev'} required={true} type={'date'} onChange={di => setDia((di.target as HTMLInputElement).value)} />
                        </div>

                        <div className={styles.divFila}>
                            <h3>¿Qué facultad organiza esto? </h3>
                            <input title={'fac_ev'} required={true} onChange={f => setFacultad((f.target as HTMLInputElement).value)} />
                        </div>

                        <footer className={styles.footerNotMain}>
                            <p> <input type={'checkbox'} title={'check'} /> Mi evento cumple con las normas de la comunidad </p>

                        </footer>
                        <section className={styles.Flex1}>
                            <button className={styles.botonEstandar} type="submit" onClick={actualizarPagina}>
                                { /*<Link href={"/evento/crearEvento"}> */}¡Hazlo realidad!{ /*</Link> */} </button>
                        </section>
                    </form>


                </div>
            </main>


        </div>
    )
}

export default CrearEvento;