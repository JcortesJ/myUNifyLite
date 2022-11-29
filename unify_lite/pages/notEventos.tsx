import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link'
import Notificacion from '../components/notAmistad'
import Evento from '../components/notParche'
import NavSup from '../components/supNotAmigo' 
import Navbar from '../components/Navbar'
import styles from '../styles/Login.module.css'
import { useEffect, useState } from 'react'
import { useUser } from '../contexts/user'
const NotEventos = () => {
  const {user,setUser} = useUser();
  const [dataNotificaciones, setNotificaciones] = useState<any[]>([]);
  const [mostrarNotificaciones, setMostrarN] = useState<string[][]>([['Buscando Notificaciones...','cargando info...', 'Borrar', ]]);
  async function getPageData() {
    console.log('id usuario' +user)
    let apiUrlEndpoint = './api/traerNot/'+user;
    let response = await fetch(apiUrlEndpoint)
    let res = await response.json();
    setNotificaciones(res.datos[0]);
  }

 

  useEffect(
    () => {
      getPageData()
   
    },[]
  );

  async function actualizarPagina() {
    await getPageData();
    console.log('datos notificaciones ');
    console.log(dataNotificaciones);
    if(dataNotificaciones[0][0] !='' ){
      let arrAux: string[][] = [['jiji']];
    //map para insertar en mostrarAmigos
    dataNotificaciones.map(indice => {
      //traemos los datos
      let nom:string = indice.nombre;
      console.log('nombre:' +nom)
      //los guardamos en un array
      let arrIndice = [nom,'Evento Disponible','Borrar'];
        if (arrAux[0][0] == 'jiji') {
          arrAux[0] = arrIndice;
        }
        else {
          arrAux.push(arrIndice);
        }
    });
    //luego de hacer el map seteamos la nueva variable
    setMostrarN(arrAux);
      //console.log(mostrarAmigos);
      console.log(dataNotificaciones);
      console.log(user);
      console.log(mostrarNotificaciones)
      //ahora buscamos si el usuario tiene notificaciones que nos muestre 
   
    }
    else{
        setMostrarN([['No tienes notificaciones','nada nuevo por aqui','Borrar']])
    }
  }




  return (
    <div className={styles.container}>
      <Head>
        <title>Eventos Nuevos</title>
        <meta name="description" content="Social Media App" />
        <link rel="icon" href="/Frame.ico" />
      </Head>

      <main className={styles.main}>
      <nav className={styles.divNavSup}>
        
        <div className={styles.divNotCurrent}>
        <Link href={"/notAmigos"}>
         Amigos
         </Link>
      </div>
        
   
      <div className={styles.divCurrentVision}>
      <div onClick={actualizarPagina}>
              Eventos
              </div>
          </div>
    </nav>
        <div className={styles.cajitaScroll3}>
        { /*<Notificacion{...["Usuario 1", "Quiere ser tu amix", "Eliminar"]}> </Notificacion> */}
        {mostrarNotificaciones.map((a: string[]) => (<Notificacion{...a} key={a[0]}></Notificacion>))}
        </div>
      </main>

      <Navbar></Navbar>
    </div>
  )
}

export default NotEventos;