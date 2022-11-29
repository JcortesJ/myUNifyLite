import React, {useRef, useState} from 'react' 
import Link from 'next/link';
import styles from '../styles/Notificacion.module.css'

const NavNotif= () => {
const div1 = useRef<HTMLDivElement>(null);
const div2 = useRef<HTMLDivElement>(null);

    /* Inicializamos la pestaña como falsa porque estará cerrada y cambiara a lo largo del programa */

  return (
<>
    <nav className={styles.divNavSup}>
        
        <div className={styles.divNotCurrent}>
        <Link href={"/buscarAmigos"}>
         Usuarios
         </Link>
      </div>
        
   
      <div className={styles.divCurrentVision}>
            <Link href={"/buscarParches"}>
              Parches
            </Link>
          </div>
         </nav>
    </>
  );
}

export default  NavNotif;