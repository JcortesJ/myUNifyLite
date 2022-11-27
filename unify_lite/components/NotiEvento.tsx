import React, {useState} from 'react'
//import {Link} from "react-scroll"; 
import Link from 'next/link';
import styles from '../styles/Login.module.css'

const NotiEvento = (  ) => {


    /* Inicializamos la pestaña como falsa porque estará cerrada y cambiara a lo largo del programa */

  return (
    <div className={styles.divEvento}>
      <div className={styles.divEventoImagen}>
        <img  alt="Dinosaurio" src="https://th.bing.com/th/id/R.089f1e05b4d8ce916f5c7dee8bea4505?rik=KFo3hG6nVGp1Ww&riu=http%3a%2f%2fwww.home2b.nl%2fhome2b-secret-history%2fsecret-history-dinosaurs_files%2fimage014.jpg&ehk=6s4cp%2bosonOv6DL2zl7dgNh%2foBT6FGCVgo3Dt5QWO4%3d&risl=&pid=ImgRaw&r=0&sres=1&sresct=1"></img> 
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
            <button className=" h-5 w-fit text-sm px-2 rounded-md mr-2">
                Asistir
            </button>
        </div>
    </div>
      
    </div>
  );
}

export default NotiEvento;