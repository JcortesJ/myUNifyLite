import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link'
import styles from '../styles/Etiquetas.module.css'

const Etiqueta = (props:string[]) => {
  return (
    <div className= {styles.EtiquetaStyle}> 
      <h1>{props[0]}</h1>
    </div>
  )
}

export default Etiqueta
