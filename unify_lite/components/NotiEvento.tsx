import React, {useEffect, useState} from 'react'
//import {Link} from "react-scroll"; 
import Link from 'next/link';
import styles from '../styles/Login.module.css'
import { useIdBusqueda } from '../contexts/idBusqueda';
import { useUser } from '../contexts/user';

const NotiEvento = (props:string[]) => {

  const {user, setUser} = useUser();
  const { idBusqueda, setIdBusqueda } = useIdBusqueda();
  const [dataEvento, setdataEvento] = useState<any[]>([]);
  const [mostrarEvento, setMostrarEvento] = useState<string[][]>([['0', '0', 'Cargando Evento...']]);

  async function guardarEvento() {
    const datos =  user+','+props[0]
    console.log(datos);
    const apiUrlEndpoint = '../api/guardarEvento/'+datos;
    const response = await fetch(apiUrlEndpoint)
    const res = await response.json();
    setdataEvento(res.datos);
  }
    /* Inicializamos la pestaña como falsa porque estará cerrada y cambiara a lo largo del programa */

  return (
    <Link href='/evento/eventoInfo'>
    <div className={styles.divEvento} onClick={()=> setIdBusqueda(props[0])}>
      <div className={styles.divEventoImagen}>
        <img  alt="Unal" src="https://th.bing.com/th/id/R.eddbee180abf423179d312dff723ac19?rik=WMHSfCmQsupfFw&riu=http%3a%2f%2fstatic-1.ivoox.com%2fradios%2f2%2f3%2f7%2f1%2f2511549921732_XXL.jpg&ehk=FYqRCCE5qcaKKjPpEABq5HsikouM8gqzE8JeJR4t%2bFY%3d&risl=&pid=ImgRaw&r=0"></img> 
      </div>
      <div className={styles.divEventoInfo}>
        <div className=" w-full text-xs h-5 whitespace-nowrap overflow-hidden flex content-center items-center justify-between font-arimo font-normal text-black" >
            Platzi te ha invitado a un evento
            <i className="fa-regular fa-circle-xmark text-purple hover:text-orange"></i>
        </div>
        <div className=" w-full h-16 overflow-hidden flex content-center items-center justify-between font-bold ">
            <div  className="text-purple font-titillium leading-4 w-8/12">
                Evento de Platzi Para emprededores de apps
            </div>
            <div className='text-sm font-arimo font-normal leading-3 w-4/12 text-black text-center'>
                Jue, nov 24 - 3:30 PM
            </div>
        </div>
        
        <div className=" w-full text-sm h-5 flex whitespace-nowrap overflow-hidden content-center items-center justify-between">
            <div className=' font-arimo font-normal text-purple'>
                En la plaza che
            </div>
            <button  onClick={guardarEvento} className=" h-5 w-fit text-sm px-2 rounded-md mr-2">
                Asistir
            </button>
        </div>
    </div>
      
    </div>
    </Link>
  );
}

export default NotiEvento;

function getPageData() {
  throw new Error('Function not implemented.');
}
