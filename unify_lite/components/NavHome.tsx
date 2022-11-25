import React, {useState} from 'react'
//import {Link} from "react-scroll"; 
import Link from 'next/link';
import styles from '../styles/Login.module.css'

const NavHome = () => {


    /* Inicializamos la pestaña como falsa porque estará cerrada y cambiara a lo largo del programa */

  return (
    <div className={styles.homeHeader}>
        {/* <div className='lineaNegra h-full font-titillium text-xl w-2/5 flex content-center items-center justify-center'>
          Para tí
        </div>
        <div className='lineaNegra h-full font-titillium text-xl w-2/5 flex content-center items-center justify-center '>
          Seguidos
        </div> */}
        <div className='h-full w-4/5 flex content-center items-center justify-center'>
        <input type="text" id="search" name="search" placeholder='Buscar' className='cajaBusqueda '/>
        </div>
        <div className='h-full w-1/5 flex content-center items-center justify-center '>
          <i className="fa-solid text-xl fa-magnifying-glass h-fit hover:text-orange transition-all"></i>
        </div>
        
    </div>
  );
}

export default NavHome
