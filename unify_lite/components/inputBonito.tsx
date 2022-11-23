import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link'
import styles from '../styles/components.module.css'

const InputDef = (props:string[]) => {
  return (
   <div className={styles.divFila}>
      <h3>{props[0]}</h3>
      <input/>
   </div>
  )
}

export default InputDef
