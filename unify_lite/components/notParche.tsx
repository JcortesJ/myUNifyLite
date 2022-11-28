import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link'
import styles from '../styles/Notificacion.module.css'
import styles2 from '../styles/Login.module.css'
import buttonStyles from '../styles/Buttons.module.css'
import Etiquetas from '../components/etiqueta'
import { useRef } from 'react'



//En realidad el img es un icon pero no pude ponerlo :c
// recibe un arreglo con: Primero el título, despues una descripcion/texto auxiliar, 
//y por ultimo el mensaje del buttonFalse
const NotParche= (props:string[]) => {
  const aceptarBtn = useRef<HTMLButtonElement>(null);
  const eliminarBtn = useRef<HTMLButtonElement>(null);
  if(aceptarBtn.current!=null && eliminarBtn.current!=null){
      eliminarBtn.current.style.display = 'none'
  }
  return (
   <div className={styles2.divAmigo}>
        <img src={"/user_circulo.svg"}className={styles.divAmigoImagen}></img>
        <div className={styles.divAmigoNotInfo}>
            <h2>{props[0]}</h2> 
            <h4>Descripcion del grupo: <br></br>{props[1]}</h4>
            <div className={styles.divEtiqueta}>
              <div className="flex m-0.5 px-1 rounded-md content-center items-center bg-orange text-white">Entretenimiento</div>
            </div>                      
        </div>
        
        <button className = {buttonStyles.buttonTrue} ref = {aceptarBtn}> Aceptar </button>
        <button className={buttonStyles.buttonFalse} ref={eliminarBtn}> {props[2]}</button>
        
        
   </div>
  )
}

export default NotParche