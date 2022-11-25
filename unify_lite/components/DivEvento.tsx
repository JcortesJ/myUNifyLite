import React, {useState} from 'react'
//import {Link} from "react-scroll"; 
import Link from 'next/link';
import styles from '../styles/Login.module.css'

const DivEvento = (  ) => {


    /* Inicializamos la pestaña como falsa porque estará cerrada y cambiara a lo largo del programa */

  return (
    <div className={styles.divEvento}>
      <div className={styles.divEventoImagen}>
        <img  alt="Dinosaurio" src="https://th.bing.com/th/id/R.089f1e05b4d8ce916f5c7dee8bea4505?rik=KFo3hG6nVGp1Ww&riu=http%3a%2f%2fwww.home2b.nl%2fhome2b-secret-history%2fsecret-history-dinosaurs_files%2fimage014.jpg&ehk=6s4cp%2bosonOv6DL2zl7dgNh%2foBT6FGCVgo3Dt5QWO4%3d&risl=&pid=ImgRaw&r=0&sres=1&sresct=1"></img> 
      </div>
      <div className={styles.divEventoInfo}>
        <div className="w-full h-9 leading-4 overflow-hidden flex content-center items-center font-bold text-purple font-titillium" >
          Evento de Platzy Para emprededores de apps
        </div>
        <div className="w-full text-sm h-5 whitespace-nowrap overflow-hidden flex content-center items-center font-arimo font-normal text-black" >
          Jue, nov 24 - 3:30 PM
        </div>
        <div className="w-full text-xs h-5 flex whitespace-nowrap overflow-hidden content-center items-center font-arimo font-normal text-purple" >
          En la plaza che
        </div>
        {/* <div className="w-full text-xs h-3 flex whitespace-nowrap overflow-hidden content-center items-center font-arimo font-normal text-gray" >
        Creado por PLATZI
        </div> */}
        <div className="w-full text-xs h-6 flex whitespace-nowrap overflow-hidden content-center items-center font-titillium font-bold text-white">
          <div className="flex mx-0.5 px-0.5 rounded-md content-center items-center bg-orange">Entretenimiento</div>
          <div className="flex mx-0.5 px-0.5 rounded-md content-center items-center bg-orange">Entretenimiento</div>
          <div className="flex mx-0.5 px-0.5 rounded-md content-center items-center  bg-orange">Entretenimiento</div>
          <div className="flex mx-0.5 px-0.5 rounded-md content-center items-center  bg-orange">Entretenimiento</div>
          
        </div>
      </div>
      
    </div>
  );
}

export default DivEvento;