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
const NotAmigos = () => {
  const {user,setUser} = useUser();
  const [dataAmigos, setdataAmigos] = useState<any[]>(['']);
  const [dataNotificaciones, setNotificaciones] = useState<any[]>([]);
  const [mostrarNotificaciones, setMostrarN] = useState<string[][]>([['Buscando Notificaciones...','cargando info...', 'Borrar', ]]);
  async function getPageData() {
    console.log('ejecutando')
    let apiUrlEndpoint = './api/buscarAQuery';
    let response = await fetch(apiUrlEndpoint)
    let res = await response.json();
    setdataAmigos(res.datos);
    //traer notificaciones
     apiUrlEndpoint = './api/buscarSolicitudes';
     response = await fetch(apiUrlEndpoint)
     res = await response.json();
    setNotificaciones(res.solicitudesAmigos);
  }

 

  useEffect(
    () => {
      getPageData()
   
    },[]
  );

  async function actualizarPagina() {
    
    await getPageData();
    console.log('datos notificaciones')
    console.log(dataNotificaciones);
    if(dataNotificaciones[0][0] !='' ){
      let arrAux: string[][] = [['jiji']];
    //map para insertar en mostrarAmigos
    dataNotificaciones.map(indice => {
      //traemos los datos
      let solicitante:string = indice.solicitanteID;
      let solicitado:string = indice.solicitadoID;
      //los guardamos en un array
      let arrIndice = ['No tienes notificaciones','revisa mas tarde','Eliminar'];
      
      if(solicitado ==user){
      console.log('usuario verificado')
        //buscamos el nombre del solicitante
        dataAmigos.map( (indice) =>{
          console.log('iniciamos ciclo')
            if(indice.ID == solicitante){
              console.log('usuario encontrado')
              arrIndice = [indice.apodos,'quiere ser tu amigo','Eliminar'];
            }
        });
        if (arrAux[0][0] == 'jiji') {
          arrAux[0] = arrIndice;
        }
        else {
          arrAux.push(arrIndice);
        }
      }
    });
    //luego de hacer el map seteamos la nueva variable
    if(arrAux[0][0] == 'jiji'){
      arrAux= [['No tienes notificaciones','nada nuevo por aqui','Borrar']];
    }
    setMostrarN(arrAux);
      console.log(dataAmigos);
      //console.log(mostrarAmigos);
      console.log(dataNotificaciones);
      console.log(user);
      console.log(mostrarNotificaciones)
      //ahora buscamos si el usuario tiene notificaciones que nos muestre 
   
    }
  }




  return (
    <div className={styles.container}>
      <Head>
        <title>Solicitudes</title>
        <meta name="description" content="Social Media App" />
        <link rel="icon" href="/Frame.ico" />
      </Head>

      <main className={styles.main}>
      <nav className={styles.divNavSup}>
        
        <div className={styles.divCurrentVision}>
        <div onClick={actualizarPagina}>
         Amigos
         </div>
      </div>
        
   
      <div className={styles.divNotCurrent}>
      <Link href={"/notEventos"}>
              Eventos
              </Link>
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

export default NotAmigos;