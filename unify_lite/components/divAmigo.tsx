import React, {useState} from 'react'
//import {Link} from "react-scroll"; 
import Link from 'next/link';
import styles from '../styles/Login.module.css'

const DivAmigo = (props:string[]) => {
  const molestar = () =>{
    alert("funcionalidad aun en proceso");
  }
  const numeroP = props[0];
  const numeroA = props[1];
  const nombreU = props[2];
    /* Inicializamos la pestaña como falsa porque estará cerrada y cambiara a lo largo del programa */

  return (
    <div className={styles.divAmigo}>
     
        <img src={"/user_circulo.svg"}className={styles.divAmigoImagen}></img>

      <div className={styles.divAmigoInfo}>
        <h1>{nombreU}</h1>
        <h2>Parches en común: {numeroP}</h2>
        <h2>Amigos en común: {numeroA}</h2>
      </div>
      <div className={styles.div3lineas}>
        <img src={"tres_puntos.svg"} onClick={molestar}></img>
      </div>
    </div>
  );
}

export default DivAmigo;