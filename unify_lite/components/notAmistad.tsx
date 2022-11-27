import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link'
import styles from '../styles/Notificacion.module.css'
import buttonStyles from '../styles/Buttons.module.css'


//En realidad el img es un icon pero no pude ponerlo :c
// recibe un arreglo con: Primero el título, despues una descripcion/texto auxiliar, 
//y por ultimo el mensaje del buttonFalse
const NotAmistad = (props:string[]) => {
  return (
   <div className={styles.divNotificacion}>
        <img className={styles.img} src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTyvdzUagUnP7jVI0o7fOh8siF3pgTC6lx1Rw&usqp=CAU'></img> 
        <div className={styles.divElements}>
            <h2>{props[0]}</h2> 
            <h4>{props[1]}</h4>
            
        </div>
        
        <div className={styles.divElements}>
            <button className = {buttonStyles.buttonTrue}> Aceptar </button>
            <button className={buttonStyles.buttonFalse}> {props[2]}</button>

        </div>
   </div>
  )
}

export default NotAmistad
