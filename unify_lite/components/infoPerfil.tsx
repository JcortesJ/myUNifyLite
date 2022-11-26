import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link'
import styles from '../styles/PerfilInfo.module.css'
import buttonStyles from '../styles/Buttons.module.css'



// recibe un arreglo con: el numero  amostrar arriba de encabezado, el nombre del encabezado
const InfoPerfil = (props:string[]) => {
  return (
   <div className={styles.infoDiv}>
        <h2 className={styles.number}> {props[0]}</h2>
        <h1 className={styles.sectionText}> {props[1]}</h1>
   </div>
  )
}

export default InfoPerfil