import React, {useState} from 'react'
//import {Link} from "react-scroll";
import Link from 'next/link';
import styles from '../styles/Login.module.css'
import { useIdBusqueda } from '../contexts/idBusqueda';



const DivEvento = (props:string[]) => {
  const { idBusqueda, setIdBusqueda } = useIdBusqueda();

    /* Inicializamos la pestaña como falsa porque estará cerrada y cambiara a lo largo del programa */

  return (
    <Link href='/evento/eventoInfo'>
    <div className={styles.divEvento} onClick={()=> setIdBusqueda(props[0])}>
      <div className={styles.divEventoImagen}>
        <img  alt="Dinosaurio" src="https://th.bing.com/th/id/R.eddbee180abf423179d312dff723ac19?rik=WMHSfCmQsupfFw&riu=http%3a%2f%2fstatic-1.ivoox.com%2fradios%2f2%2f3%2f7%2f1%2f2511549921732_XXL.jpg&ehk=FYqRCCE5qcaKKjPpEABq5HsikouM8gqzE8JeJR4t%2bFY%3d&risl=&pid=ImgRaw&r=0"></img>
      </div>
      <div className={styles.divEventoInfo}>
        <div className="w-full h-9 leading-4 overflow-hidden flex content-center items-center font-bold text-purple font-titillium" >
          {props[1]}
        </div>
        <div className="w-full text-sm h-5 whitespace-nowrap overflow-hidden flex content-center items-center font-arimo font-normal text-black" >
          {props[2]}
          {/* Jue, nov 24 - 3:30 PM */}
        </div>
        <div className="w-full text-xs h-5 flex whitespace-nowrap overflow-hidden content-center items-center font-arimo font-normal text-purple" >
          {props[3]}
        </div>
        {/* <div className="w-full text-xs h-3 flex whitespace-nowrap overflow-hidden content-center items-center font-arimo font-normal text-gray" >
        Creado por PLATZI
        </div> */}
        <div className="w-full text-xs h-6 flex whitespace-nowrap overflow-hidden content-center items-center font-titillium font-bold text-white">
          <div className="flex mx-0.5 px-0.5 rounded-md content-center items-center bg-orange">Deporte</div>
          <div className="flex mx-0.5 px-0.5 rounded-md content-center items-center bg-orange">Cultura</div>
          <div className="flex mx-0.5 px-0.5 rounded-md content-center items-center bg-orange">Entretenimiento</div>
        </div>
      </div>

    </div>
    </Link>
  );
}

export default DivEvento;