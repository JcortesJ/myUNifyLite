import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link'
import styles from '../styles/Home.module.css'
import styles2 from '../styles/Login.module.css'
import parche from '../styles/VistaParches.module.css'
import button from '../styles/Buttons.module.css'
import Info from '../components/infoPerfil'
import Etiqueta from '../components/etiqueta'
import Navbar from '../components/Navbar'
import { useIdBusqueda } from '../contexts/idBusqueda';
import { useEffect, useState } from 'react'
import { useUser } from '../contexts/user'

const VistaParche = () => {
  const {user, setUser} = useUser();
  const { idBusqueda, setIdBusqueda } = useIdBusqueda();
  const [dataParche, setdataParche] = useState<any[]>([]);
  const [mostrarParche, setMostrarParche] = useState<string[][]>([['0', '0', 'Cargando Parche...']]);

  async function getPageData() {
    console.log(idBusqueda);
    const apiUrlEndpoint = '../api/parches/'+user+','+idBusqueda;
    const response = await fetch(apiUrlEndpoint)
    const res = await response.json();
    setdataParche(res.datos[0]);
  }

  useEffect(
    () => {
      console.log(idBusqueda);
      getPageData();
    },[]
  )

  async function actualizarPagina(data: any) {
    await getPageData();
    let arrAux: string[][] = [['jiji']];
    //map para insertar en mostrarEventos
    dataParche.map(indice => {
      //traemos los datos
      let id = indice.id_creador_fraternidad;
      let nombre = indice.namePar;
      let amixCount = indice.amixCount;
      let eventCount = indice.eventCount;
      let usersFrat = indice.usersFrat;
      let lider = indice.jefe;
      
      //los guardamos en un array
      let arrIndice = [id, nombre,amixCount,eventCount,usersFrat,lider];
      if (arrAux[0][0] == 'jiji') {
        arrAux[0] = arrIndice;
      }
      else {
        arrAux.push(arrIndice);
      }
    });
    setMostrarParche(arrAux);
    setTimeout(() => {
      console.log(dataParche);
      console.log(mostrarParche);
    }, 200);
    //luego de hacer el map seteamos la nueva variable
  }


  return (
    <div className={styles.container}>
      {mostrarParche.map((a: string[]) => (
      <>
      <Head>
        <title >Parche</title>
        <meta name="description" content="Social Media App" />
        <link rel="icon" href="/Frame.ico" />
      </Head>
      <div className={styles.cajitaScroll}>
      <header className = {parche.headerPar}>     
          <Link href='buscarParches'>         
            <div >
                <i className="fa-solid fa-arrow-left hover:text-orange transition-all"></i>
            </div>
          </Link>
          <div className={parche.divText}>
          {a[1]}
          </div>
          <div className={styles2.div3lineas}>
            <img src={"tres_puntos.svg"}></img>
          </div>
      </header>
      
      <div className={parche.divFoto} onClick={actualizarPagina}>
        <img src='https://d1fdloi71mui9q.cloudfront.net/g7623yGRRFy42fKCXHIT_K2HxTj5Ha3dlH4J7'></img>
      </div>
        
      <div className={parche.basicDiv}>
        <h1 className={parche.styleH1}>Lider</h1>
      </div>
      <div className={parche.basicDiv}>
        <h2 className={parche.styleH2}> {a[5]}</h2>
      </div>
  
      <div className={parche.basicDiv}>
          <Info{...[ a[4], 'Usuarios que parchan']}></Info>
          <Info{...[a[3], 'Eventos activos']}></Info>
          <Info{...[a[2], 'Tus amigos en el parche']}></Info>
      </div>
      <div className={parche.infoDiv}>
        <Etiqueta{...["Etiqueta 1"]}> </Etiqueta>
        <Etiqueta{...["Etiqueta 2"]}> </Etiqueta>
        <Etiqueta{...["Etiqueta 3"]}> </Etiqueta>
        <Etiqueta{...["Etiqueta 4"]}> </Etiqueta>
        <Etiqueta{...["Etiqueta 5"]}> </Etiqueta>
        <Etiqueta{...["Etiqueta 6"]}> </Etiqueta>
        <Etiqueta{...["Etiqueta 7"]}> </Etiqueta>

      </div>

      <div className={parche.basicDiv}>
        <button className={button.buttonTrue}> UNIRSE</button>
      </div>

      </div>
      </>
      ))}
      <Navbar></Navbar>
      
         
    </div>
  )
}

export default VistaParche
