        import React, {useRef, useState} from 'react' 
        import Link from 'next/link';
        import styles from '../styles/Home.module.css'
        
        const NavNotif= () => {
        const div1 = useRef<HTMLDivElement>(null);
        const div2 = useRef<HTMLDivElement>(null);
        
            /* Inicializamos la pestaña como falsa porque estará cerrada y cambiara a lo largo del programa */
        
          return (
        <>
            <nav className={styles.flex3}>
                
                <div >
                <Link href={"/buscarAmigos"}>
                 Usuarios
                 </Link>
              </div>
                
           
              <div >
              <Link href={"/buscarParches"}>
                      Parches
                      </Link>
                  </div>
            <img src={"/lupita.svg"} ></img>
            </nav>
            </>
          );
        }
        
        export default  NavNotif;