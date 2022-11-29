import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link'
import Navbar from '../components/Navbar'
import NavHome from '../components/NavHome'
import styles from '../styles/Login.module.css'
import DivEvento from '../components/DivEvento'
import NavNotif from '../components/barraSup'
import DivAmigo from '../components/divAmigo'
import { useEffect, useState } from 'react'

const NotAmigos = () => {

  const [dataAmigos, setdataAmigos] = useState<any[]>([]);
  const [mostrarAmigos, setMostrar] = useState<string[][]>([['0', '0', 'Buscando usuarios...']]);
  async function getPageData() {
    const apiUrlEndpoint = './api/buscarAQuery';
    const response = await fetch(apiUrlEndpoint)
    const res = await response.json();
    setdataAmigos(res.datos);
  }

  useEffect(
    () => {
      getPageData()
    }
  );

  async function actualizarPagina() {
    await getPageData();
    let arrAux: string[][] = [['jiji']];
    //map para insertar en mostrarAmigos
    dataAmigos.map(indice => {
      //traemos los datos
      let nombre = indice.apodos;
      let amigos = indice.amigos;
      let parches = indice.parches;
      let id = indice.ID;
      //los guardamos en un array
      let arrIndice = [parches, amigos, nombre,id];
      if (arrAux[0][0] == 'jiji') {
        arrAux[0] = arrIndice;
      }
      else {
        arrAux.push(arrIndice);
      }
    });
    //luego de hacer el map seteamos la nueva variable
    setMostrar(arrAux);
    setTimeout(() => {
      console.log(dataAmigos);
      console.log(mostrarAmigos);
    }, 200);
  }


  return (
    <div className={styles.container}>
      <Head>
        <title>Buscar Amigos</title>
        <meta name="description" content="Social Media App" />
        <link rel="icon" href="/Frame.ico" />
      </Head>

      <main className={styles.main}>


        <div className={styles.cajitaScroll}>
          <nav className={styles.flex3}>

            
            <div >
              <Link href={"/buscarAmigos"}>
                Usuarios
              </Link>
            </div>


            <div >
              <Link href={"/buscarParches"}>
                Parches
              </Link>
            </div>
            <button title={'botonActualziar'} type={'submit'}><img src={"/lupita.svg"} onClick={actualizarPagina}></img></button>
          </nav>

          {/**trae los amigos y los muestra en un div */}
          {mostrarAmigos.map((a: string[]) => (<DivAmigo{...a} key={a[3]}></DivAmigo>))}


        </div>
        <Navbar></Navbar>

      </main>
    </div>
  )
}

export default NotAmigos;