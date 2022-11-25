import React, {useState} from 'react'
//import {Link} from "react-scroll"; 
import Link from 'next/link';
import styles from '../styles/Login.module.css'

const Navbar = () => {


    /* Inicializamos la pestaña como falsa porque estará cerrada y cambiara a lo largo del programa */

  return (
    <nav>
      <i className="fa-solid fa-house"></i>
      <i className="fa-solid fa-calendar-days"></i>
      <div className={styles.circulo}><i className="fa-solid fa-plus"></i></div>
      <i className="fa-solid fa-user-group"></i>
      <i className="fa-solid fa-user"></i>
    </nav>
  );
}

export default Navbar
