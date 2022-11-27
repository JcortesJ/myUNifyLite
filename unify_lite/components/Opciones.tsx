import React, {useState} from 'react'
//import {Link} from "react-scroll"; 
import Link from 'next/link';
import styles from '../styles/Login.module.css'

const Opciones = () => {


    /* Inicializamos la pestaña como falsa porque estará cerrada y cambiara a lo largo del programa */

  return (
    <div className='popupContainer'>
       <div className='popup'>
       <div className='flex flex-row justify-between text-xl'>
        <p className='text-center '>Crear:</p>
        <i className="fa-regular fa-circle-xmark h-fit text-purple hover:text-orange "></i>
       </div>
        <Link href='/evento/crearEvento'>
        <button>
          Evento
        </button>
        </Link>
        <Link href='/evento/crearEvento'>
        <button>
          Fraternidad
        </button>
        </Link>
      </div>
    </div>
   
  );
}

export default Opciones;
