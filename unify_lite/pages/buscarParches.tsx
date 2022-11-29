import type { NextPage } from 'next'
import Head from 'next/head'
import Link from 'next/link'
import Evento from '../components/notParche'
import NavSup from '../components/supBuscParche' 
import Navbar from '../components/Navbar'
import styles from '../styles/Login.module.css'
import { useEffect, useState } from 'react'

const NotParche = () => {

  const [dataParches, setdataParches] = useState<any[]>([]);
  const [mostrarParches, setMostrar] = useState<string[][]>([['0', '0', 'Buscando usuarios...']]);
  async function getPageData() {
    const apiUrlEndpoint = './api/buscarParches';
    const response = await fetch(apiUrlEndpoint)
    const res = await response.json();
    setdataParches(res.datos);
  }

  useEffect(
    () => {
      getPageData()
    }
  );

  async function actualizarPagina(data: any) {
    await getPageData();
    let arrAux: string[][] = [['jiji']];
    //map para insertar en mostrarParches
    dataParches.map(indice => {
      //traemos los datos
      let id = indice.id_creador_fraternidad;
      let nombre = indice.nombre;
      let descripcion = indice.descripcion;
      //los guardamos en un array
      let arrIndice = [id, nombre,descripcion];
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
      console.log(dataParches);
      console.log(mostrarParches);
    }, 200);
  }


  return (
    <div className={styles.container}>
      <Head>
        <title>Parches</title>
        <meta name="description" content="Social Media App" />
        <link rel="icon" href="/Frame.ico" />
      </Head>

      <main className={styles.main}>
       <div className={styles.cajitaScroll}>
       <nav className={styles.flex3}>

          
            <NavSup></NavSup>
            
            <button type={'submit'}><img src={"/lupita.svg"} onClick={actualizarPagina}></img></button>
        </nav>
        {mostrarParches.map((a: string[]) => (<Evento{...a} key={a[0]}></Evento>))}
       </div>

       
      </main>

      <Navbar></Navbar>
    </div>
  )
}

export default NotParche;