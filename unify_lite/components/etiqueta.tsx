import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link'
import styles from '../styles/Etiquetas.module.css'

const Etiqueta = (props:string[]) => {
  return (
    <div className= {styles.EtiquetaStyle}> 
      {props[0]}
    </div>
  )
}

export default Etiqueta
