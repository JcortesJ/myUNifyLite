import React, {useState} from 'react'
//import {Link} from "react-scroll"; 
import Link from 'next/link';
import styles from '../styles/Login.module.css'

const Navbar = () => {

  const [activo, setActivo] = useState(false);
    /* Inicializamos la pestaña como falsa porque estará cerrada y cambiara a lo largo del programa */

  return (
    <nav>
      <Link href={"/home/home"}>
        <i className="fa-solid fa-house"></i>
      </Link>
      <Link href={"/guardados"}>
         <i className="fa-solid fa-calendar-days"></i>
      </Link>
        <div className={styles.circulo} onClick={() => {
              setActivo(true);
            }}><i className="fa-solid fa-plus hover:text-orange"></i></div>
      <Link href={"/buscarAmigos"}>
        <i className="fa-solid fa-user-group"></i>
      </Link>
      <Link href={"/vistaParche"}>
        <i className="fa-solid fa-user"></i>
      </Link>
      {activo ? (
        <div className='popupContainer'>
        <div className='popup'>
        <div className='flex flex-row justify-between text-xl'>
         <p className='text-center '>Crear:</p>
         <i className="fa-regular fa-circle-xmark h-fit text-purple hover:text-orange " onClick={() => {
              setActivo(false);
            }}></i>
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
      ):(
        <></>
      )}
    </nav>
  );
}

export default Navbar
