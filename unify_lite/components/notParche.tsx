import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link'
import styles from '../styles/Notificacion.module.css'
import styles2 from '../styles/Login.module.css'
import buttonStyles from '../styles/Buttons.module.css'
import Etiquetas from '../components/etiqueta'
import { useRef } from 'react'
import { useIdBusqueda } from '../contexts/idBusqueda';



//En realidad el img es un icon pero no pude ponerlo :c
// recibe un arreglo con: Primero el título, despues una descripcion/texto auxiliar, 
//y por ultimo el mensaje del buttonFalse
const NotParche= (props:string[]) => {
  const { idBusqueda, setIdBusqueda } = useIdBusqueda();
  const aceptarBtn = useRef<HTMLButtonElement>(null);
  const eliminarBtn = useRef<HTMLButtonElement>(null);
  if(aceptarBtn.current!=null && eliminarBtn.current!=null){
      eliminarBtn.current.style.display = 'none'
  }
  return (
    <>
    <Link href={'/vistaParche'}>
   <div className={styles2.divAmigo} onClick={()=> setIdBusqueda(props[0])}>
        <img src={"/parche_foto.png"}className={styles.divAmigoImagen}></img>
        <div className={styles.divAmigoNotInfo}>
            <h2 >{props[1]}</h2> 
            <h4 >Descripcion: <br></br>{props[2]}</h4>
            <div className={styles.divEtiqueta}>
              <div className="flex m-0.5 px-1 rounded-md content-center items-center bg-orange text-white">Entretenimiento</div>
            </div>                      
        </div>
        
        <button className = {buttonStyles.buttonTrue} ref = {aceptarBtn}> Aceptar </button>
        <button className={buttonStyles.buttonFalse} ref={eliminarBtn}> {props[1]}</button>
        
        
   </div>
   </Link>
  </>
  )
}

export default NotParche