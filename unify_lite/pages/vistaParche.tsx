import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link'
import styles from '../styles/Home.module.css'
import styles2 from '../styles/Login.module.css'
import parche from '../styles/VistaParches.module.css'
import button from '../styles/Buttons.module.css'
import Info from '../components/infoPerfil'
import Etiqueta from '../components/etiqueta'
import Navbar from '../components/Navbar'

const VistaParche = () => {
  const molestar = () =>{
    alert("funcionalidad aun en proceso");
  }
  return (
    <div className={styles.container}>
      <Head>
        <title>Parche</title>
        <meta name="description" content="Social Media App" />
        <link rel="icon" href="/Frame.ico" />
      </Head>
      <header className = {parche.headerPar}>     
          <Link href='buscarParches'>         
            <div >
                <i className="fa-solid fa-arrow-left hover:text-orange transition-all"></i>
            </div>
          </Link>
          <div className={parche.divText}>
          Parche
          </div>
          <div className={styles2.div3lineas}>
            <img src={"tres_puntos.svg"} onClick={molestar}></img>
          </div>
      </header>
      
      <div className={parche.divFoto}>
        <img src='https://www.researchgate.net/publication/309193314/figure/fig5/AS:418126849167364@1476700620332/Figura-7-Neros-en-Transmilenio-Jovenes-identificados-como-neros-en-Facebook-Recuperado.png'></img>
      </div>
        
      <div className={parche.basicDiv}>
        <h1 className={parche.styleH1}>Lider</h1>
      </div>
      <div className={parche.basicDiv}>
        <h2 className={parche.styleH2}> usuario (link)</h2>
      </div>
  
      <div className={parche.basicDiv}>
          <Info{...["11", 'Usuarios que parchan']}></Info>
          <Info{...["11", 'Eventos activos']}></Info>
          <Info{...["11", 'Tus amigos en el parche']}></Info>
      </div>
      <div className={parche.infoDiv}>
        <Etiqueta{...["Etiqueta 1"]}> </Etiqueta>
        <Etiqueta{...["Etiqueta 2"]}> </Etiqueta>
        <Etiqueta{...["Etiqueta 3"]}> </Etiqueta>
        <Etiqueta{...["Etiqueta 4"]}> </Etiqueta>
        <Etiqueta{...["Etiqueta 5"]}> </Etiqueta>
        <Etiqueta{...["Etiqueta 6"]}> </Etiqueta>
        <Etiqueta{...["Etiqueta 7"]}> </Etiqueta>

      </div>

      <div className={parche.basicDiv}>
        <button className={button.buttonTrue}> UNIRSE</button>
      </div>

      <Navbar></Navbar>
      
         
    </div>
  )
}

export default VistaParche
