import React, {useState} from 'react'
//import {Link} from "react-scroll"; 
import Link from 'next/link';
import styles from '../styles/Login.module.css'
import { useIdBusqueda } from '../contexts/idBusqueda';

const DivAmigo = (props:string[]) => {
  const { idBusqueda, setIdBusqueda } = useIdBusqueda();

  const molestar = () =>{
    alert("funcionalidad aun en proceso");
  }
  const numeroP = props[0];
  const numeroA = props[1];
  const nombreU = props[2];
    /* Inicializamos la pestaña como falsa porque estará cerrada y cambiara a lo largo del programa */

  return (
    <Link href='/usuario/vistaUsuario'>
    <div className={styles.divAmigo} onClick={()=> setIdBusqueda(props[3])}>
     
        <img src={"/user_circulo.svg"}className={styles.divAmigoImagen}></img>

      <div className={styles.divAmigoInfo}>
        <h1>{nombreU}</h1>
        <h2>Numero de Parches: {numeroP}</h2>
        <h2>Numero de Amigos: {numeroA}</h2>
      </div>
      <div className={styles.div3lineas}>
        <img src={"tres_puntos.svg"} onClick={molestar}></img>
      </div>
    </div>
    </Link>
  );
}

export default DivAmigo;