import type { NextPage } from 'next'
import Head from 'next/head'
import Navbar from '../../components/Navbar'
import Link from 'next/link'
import styles from '../../styles/Login.module.css'
import { useIdBusqueda } from '../../contexts/idBusqueda'
import { useEffect, useState } from 'react'
import { useUser } from '../../contexts/user'


const EventoInfo = () => {
  const {user, setUser} = useUser();
    const { idBusqueda, setIdBusqueda } = useIdBusqueda();
    const [dataEvento, setdataEvento] = useState<any[]>([]);
  const [mostrarEvento, setMostrarEvento] = useState<string[][]>([['0', '0', 'Cargando Evento...']]);

  async function getPageData() {
    const apiUrlEndpoint = '../api/eventos/'+idBusqueda;
    const response = await fetch(apiUrlEndpoint)
    const res = await response.json();
    setdataEvento(res.datos);
  }

  async function guardarEvento() {
    const datos =  user+','+idBusqueda
    console.log(datos);
    const apiUrlEndpoint = '../api/guardarEvento/'+datos;
    const response = await fetch(apiUrlEndpoint)
    const res = await response.json();
    setdataEvento(res.datos);
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
    dataEvento.map(indice => {
      //traemos los datos
      let id = indice.id_evento;
      let nombre = indice.nombre;
      let lugar = indice.lugar;
      let creador = indice.nombre_creador;
      let descripcion = indice.descripcion;
      let datee= new Date(indice.fecha);
      let fecha = datee.getDate().toString()  + " / " + 
      datee.getMonth().toString() + " / " + datee.getFullYear().toString()
       +" - "+ indice.hora.toString() + " A.M";
      //los guardamos en un array
      let arrIndice = [id, nombre,fecha,lugar,creador,descripcion];
      if (arrAux[0][0] == 'jiji') {
        arrAux[0] = arrIndice;
      }
      else {
        arrAux.push(arrIndice);
      }
    });
    //luego de hacer el map seteamos la nueva variable
    setMostrarEvento(arrAux);
    setTimeout(() => {
      console.log(dataEvento);
      console.log(mostrarEvento);
    }, 200);
  }


  return (
    <div className={styles.container}>
      <Head>
        <title>Evento</title>
        <meta name="description" content="Social Media App" />
        <link rel="icon" href="/Frame.ico" />
      </Head>

      <main className={styles.main}>
        {mostrarEvento.map((a: string[]) => (
          <>
        <div className={styles.homeHeader}>
            <Link href='/home/home'>
            
            <div className='h-full w-1/5 flex content-center items-center justify-center '>
                <i className="fa-solid fa-arrow-left hover:text-orange transition-all"></i>
            </div>
            </Link>
            <div className='h-full w-3/5 flex content-center items-center justify-center font-titillium font-bold text-center'>
                {a[1]}
            </div>
            <div className='h-full w-1/5 flex content-center items-center justify-center '>
                <i className="fa-solid fa-exclamation hover:text-orange transition-all"></i>
            </div>
        </div>
        
        <div className={styles.contenidoHome}>
            <div  onClick={actualizarPagina} className='w-full h-44 overflow-hidden bg-orange'>
                <img  alt="Dinosaurio" src="https://agenciadenoticias.unal.edu.co/uploads/pics/AgenciadeNoticias-190621-01.jpg"></img> 
            </div>
            <div className='w-full h-fit p-2 flex flex-column flex-wrap content-center items-center justify-center text-center'>
                <h1 className='font-bold w-full text-xl font-titillium text-purple'>Fecha</h1>
                <p className='bg-white w-11/12'>{a[2]}</p>
            </div>
            <div className='w-full h-fit p-2 flex flex-column flex-wrap content-center items-center justify-center  text-center'>
                <h1 className='font-bold w-full text-xl font-titillium text-purple'>Lugar</h1>
                <p>{a[3]}</p>
            </div>
            <div className='w-full h-fit p-2 flex flex-column flex-wrap content-center items-center justify-center  text-center'>
                <h1 className='font-bold w-full text-xl font-titillium text-purple'>Creador</h1>
                <p>{a[4]}</p>
            </div>
            <div className='w-full h-fit p-2 flex flex-column flex-wrap content-center items-center justify-center text-center'>
                <h1 className='font-bold w-full text-xl font-titillium text-purple'>Descripción</h1>
                <p>{a[5]}</p>
            </div>
            <div className='w-full h-fit flex flex-row flex-wrap content-center justify-center font-titillium text-white items-center '>
                <div className="flex m-0.5 px-1 rounded-md content-center items-center bg-orange">Deporte</div>
                <div className="flex m-0.5 px-1 rounded-md content-center items-center bg-orange">Cultura</div>
                <div className="flex m-0.5 px-1 rounded-md content-center items-center  bg-orange">Entretenimiento</div>
                <div className="flex m-0.5 px-1 rounded-md content-center items-center  bg-orange">Nutrición</div>
            </div>
            <button onClick={guardarEvento}>
                Guardar
            </button>
        </div>
       </>
      ))} 
        <Navbar></Navbar>
      </main>
      
    </div>
  )
}

export default EventoInfo;