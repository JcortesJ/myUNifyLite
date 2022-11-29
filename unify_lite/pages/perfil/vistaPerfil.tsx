import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link'
import styles from '../../styles/Home.module.css'
import styles2 from '../../styles/Login.module.css'
import parche from '../../styles/VistaParches.module.css'
import button from '../../styles/Buttons.module.css'
import Info from '../../components/infoPerfil'
import Etiqueta from '../../components/etiqueta'
import Navbar from '../../components/Navbar'
import { useIdBusqueda } from '../../contexts/idBusqueda';
import { useEffect, useState } from 'react'
import { useAuth } from '../../contexts/auth';
import { useUser } from '../../contexts/user'

const VistaParche = () => {
  const {auth,setAuth} = useAuth();
  const {user, setUser} = useUser();
  const { idBusqueda, setIdBusqueda } = useIdBusqueda();
  const [dataPerfil, setdataPerfil] = useState<any[]>([]);
  const [mostrarPerfil, setMostrarPerfil] = useState<string[][]>([['0', '0', 'Cargando Perfil...']]);

  async function getPageData() {
    console.log(idBusqueda);
    const apiUrlEndpoint = '../api/usuario/'+user;
    const response = await fetch(apiUrlEndpoint)
    const res = await response.json();
    setdataPerfil(res.datos);
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
    dataPerfil.map(indice => {
      //traemos los datos
      let id = indice.id_creador_fraternidad;
      let nombre = indice.nombre;
      //los guardamos en un array
      let arrIndice = [id, nombre];
      if (arrAux[0][0] == 'jiji') {
        arrAux[0] = arrIndice;
      }
      else {
        arrAux.push(arrIndice);
      }
    });
    setMostrarPerfil(arrAux);
    setTimeout(() => {
      console.log(dataPerfil);
      console.log(mostrarPerfil);
    }, 200);
    //luego de hacer el map seteamos la nueva variable
  }

  async function cerrarSesion(){
    setAuth(false);
    setUser('0');
  }


  return (
    <div className={styles.container}>
      {mostrarPerfil.map((a: string[]) => (
      <>
      <Head>
        <title >Parche</title>
        <meta name="description" content="Social Media App" />
        <link rel="icon" href="/Frame.ico" />
      </Head>
      <div className={styles.cajitaScroll2}>
      <header className = {parche.headerPar}>     
          <Link href='/home/home'>         
            <div >
                <i className="fa-solid fa-pen-to-square text-lg hover:text-orange"></i>
            </div>
          </Link>
          <div className={parche.divText}>
          {a[1]}
          </div>
          <Link href='/'>   
            <div className={styles2.div3lineas} onClick={cerrarSesion}>
            <i className="fa-solid fa-right-from-bracket text-lg hover:text-orange"></i>
            </div>
          </Link>
      </header>
      
      <div className={parche.divFoto} onClick={actualizarPagina}>
        <img src='https://www.researchgate.net/publication/309193314/figure/fig5/AS:418126849167364@1476700620332/Figura-7-Neros-en-Transmilenio-Jovenes-identificados-como-neros-en-Facebook-Recuperado.png'></img>
      </div>
        
      <div className={parche.basicDiv}>
        <h1 className={parche.styleH1}>Lider</h1>
      </div>
      <div className={parche.basicDiv}>
        <h2 className={parche.styleH2}> usuario (link)</h2>
      </div>
  
      <div className={parche.basicDiv}>
          <Info{...["11", 'Usuarios que parchan']}></Info>
          <Info{...["11", 'Eventos activos']}></Info>
          <Info{...["11", 'Tus amigos en el parche']}></Info>
      </div>
    <Link href='/notAmigos'>
      <div className={parche.basicDiv}>
        <button > Notificaciones</button>
      </div>
    </Link> 
    <div className={parche.basicDiv}>
    <button > Borrar cuenta</button>
  </div>

      </div>
      </>
      ))}
      <Navbar></Navbar>
      
         
    </div>
  )
}

export default VistaParche
