import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link'
import styles from '../styles/Notificacion.module.css'
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
      aceptarBtn.current.style.left = "20%";
      aceptarBtn.current.style.bottom = "0%";
      aceptarBtn.current.style.display = 'relative';
      eliminarBtn.current.style.display = 'none';
  }
  return (
   <div className={styles.divNotificacion}>
        <img></img> imagen xd 
        <div className={styles.divElements}>
            <h2>{props[0]}</h2> 
            <h4>Descripcion del grupo: <br></br>{props[1]}</h4>
            <div className={styles.divEtiqueta}>
                <Etiquetas{...["etiqueta1"]}> </Etiquetas>
                <Etiquetas{...["etiqueta1"]}> </Etiquetas>
            </div>                      
        </div>
        <div className={styles.divParcheAceptar}>
          <button className = {buttonStyles.buttonTrue} ref = {aceptarBtn}> Aceptar </button>
          <button className={buttonStyles.buttonFalse} ref={eliminarBtn}> {props[2]}</button>
        </div>
        
   </div>
  )
}

export default NotParche