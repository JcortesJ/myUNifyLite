import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link'
import Navbar from '../../components/Navbar'
import NavHome from '../../components/NavHome'
import NotiEvento from '../../components/NotiEvento'
import styles from '../../styles/Login.module.css'
import DivEvento from '../../components/DivEvento'
import { useEffect, useState } from 'react'

const HomeSeguidos = () => {

  const [dataEventos, setdataEventos] = useState<any[]>([]);
  const [mostrarEventos, setMostrarEventos] = useState<string[][]>([['0', '0', 'Eventos...']]);
  async function getPageData() {
    const apiUrlEndpoint = '../api/eventosUsuario/' ;
    const response = await fetch(apiUrlEndpoint)
    const res = await response.json();
    setdataEventos(res.datos);
  }

  useEffect(
    () => {
      getPageData()
    }
  );

  async function actualizarPagina(data: any) {
    await getPageData();
    let arrAux: string[][] = [['jiji']];
    //map para insertar en mostrarEventos
    dataEventos.map(indice => {
      //traemos los datos
      let id = indice.id_evento;
      let nombre = indice.nombre;
      let lugar = indice.lugar;
      let datee= new Date(indice.fecha);
      let fecha = datee.getDate().toString()  + " / " + 
      datee.getMonth().toString() + " / " + datee.getFullYear().toString()
       +" - "+ indice.hora.toString() + " A.M";
      //los guardamos en un array
      let arrIndice = [id, nombre,lugar,fecha];
      if (arrAux[0][0] == 'jiji') {
        arrAux[0] = arrIndice;
      }
      else {
        arrAux.push(arrIndice);
      }
    });
    //luego de hacer el map seteamos la nueva variable
    setMostrarEventos(arrAux);
    setTimeout(() => {
      console.log(dataEventos);
      console.log(mostrarEventos);
    }, 200);
  }


  return (
    <div className={styles.container}>
      <Head>
        <title>Home</title>
        <meta name="description" content="Social Media App" />
        <link rel="icon" href="/Frame.ico" />
      </Head>

      <main className={styles.main}>
      <div className={styles.homeHeader}>
        <Link href='/home/home' className='h-full w-2/5'>
            <div className='lineaNegra  h-full font-titillium text-xl flex content-center items-center justify-center text-black'>
            Para tí
            </div>
        </Link>
        <div className='lineaNegra lineaSeleccionado h-full font-titillium text-xl w-2/5 flex content-center items-center justify-center '>
          Seguidos
        </div> 
        <Link href='/home/homeBusqueda' className='h-full w-1/5'>
            <div className='h-full  flex content-center items-center justify-center '>
            <i className="  fa-solid text-xl fa-magnifying-glass h-fit hover:text-orange transition-all"></i>
            </div>
        </Link>
        
        </div> 
        <div className={styles.contenidoHome}>
          {mostrarEventos.map((a: string[]) => (<DivEvento{...a} key={a[0]}></DivEvento>))}
        </div>
        <Navbar></Navbar>
      </main>
    </div>
  )
}

export default HomeSeguidos;