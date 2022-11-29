import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link'
import styles from '../styles/Notificacion.module.css'
import styles2 from '../styles/Login.module.css'
import buttonStyles from '../styles/Buttons.module.css'
import { useRef } from 'react'


//En realidad el img es un icon pero no pude ponerlo :c
// recibe un arreglo con: Primero el título, despues una descripcion/texto auxiliar, 
//y por ultimo el mensaje del buttonFalse
const NotAmistad = (props:string[]) => {
  const divGrande = useRef<HTMLDivElement>(null);
 
  const borrarNot = () =>{
    if(divGrande.current!=null){
      divGrande.current.style.display='none';
    }
  };
  return (
   <div className={styles2.divAmigo} ref={divGrande}>
        <img src={"/user_circulo.svg"}className={styles.divAmigoImagen}></img>
        <div className={styles.divAmigoNotInfo}>
            <h2>{props[0]}</h2> 
            <h4>{props[1]}</h4>
            
        </div>
        
        <div className={buttonStyles.divButton}>
            <button className = {buttonStyles.buttonTrue}  onClick={borrarNot}> Aceptar </button>
            <button className={buttonStyles.buttonFalse} onClick={borrarNot}> {props[2]}</button>

        </div>
   </div>
  )
}

export default NotAmistad
