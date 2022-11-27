import type { NextPage } from 'next'
import Head from 'next/head'
import Navbar from '../../components/Navbar'
import Link from 'next/link'
import styles from '../../styles/Login.module.css'

const EventoInfo = () => {
  return (
    <div className={styles.container}>
      <Head>
        <title>Evento</title>
        <meta name="description" content="Social Media App" />
        <link rel="icon" href="/Frame.ico" />
      </Head>

      <main className={styles.main}>
        <div className={styles.homeHeader}>
            <Link href='/home/home'>
            
            <div className='h-full w-1/5 flex content-center items-center justify-center '>
                <i className="fa-solid fa-arrow-left hover:text-orange transition-all"></i>
            </div>
            </Link>
            <div className='h-full w-3/5 flex content-center items-center justify-center font-titillium font-bold text-center'>
                Nombre del evento al que se asiste
            </div>
            <div className='h-full w-1/5 flex content-center items-center justify-center '>
                <i className="fa-solid fa-exclamation hover:text-orange transition-all"></i>
            </div>
        </div>
        
        <div className={styles.contenidoHome}>
            <div className='w-full h-44 overflow-hidden bg-orange'>
                <img  alt="Dinosaurio" src="https://th.bing.com/th/id/R.089f1e05b4d8ce916f5c7dee8bea4505?rik=KFo3hG6nVGp1Ww&riu=http%3a%2f%2fwww.home2b.nl%2fhome2b-secret-history%2fsecret-history-dinosaurs_files%2fimage014.jpg&ehk=6s4cp%2bosonOv6DL2zl7dgNh%2foBT6FGCVgo3Dt5QWO4%3d&risl=&pid=ImgRaw&r=0&sres=1&sresct=1"></img> 
            </div>
            <div className='w-full h-fit p-2 flex flex-column flex-wrap content-center items-center justify-center text-center'>
                <h1 className='font-bold w-full text-xl font-titillium text-purple'>Fecha</h1>
                <p className='bg-white w-11/12'>22 de diciembre del 2022</p>
            </div>
            <div className='w-full h-fit p-2 flex flex-column flex-wrap content-center items-center justify-center  text-center'>
                <h1 className='font-bold w-full text-xl font-titillium text-purple'>Lugar</h1>
                <p>en mi casa bb</p>
            </div>
            <div className='w-full h-fit p-2 flex flex-column flex-wrap content-center items-center justify-center  text-center'>
                <h1 className='font-bold w-full text-xl font-titillium text-purple'>Creador</h1>
                <p>Pepito</p>
            </div>
            <div className='w-full h-fit p-2 flex flex-column flex-wrap content-center items-center justify-center text-center'>
                <h1 className='font-bold w-full text-xl font-titillium text-purple'>Descripción</h1>
                <p>Hola bdjanjncks cajsdncjsdnc cnjsdncjnasdicn dcdsamcnsdc dcniasjdncjiandsc</p>
            </div>
            <div className='w-full h-fit flex flex-row flex-wrap content-center justify-center font-titillium text-white items-center '>
                <div className="flex m-0.5 px-1 rounded-md content-center items-center bg-orange">Entretenimiento</div>
                <div className="flex m-0.5 px-1 rounded-md content-center items-center bg-orange">Entretenimiento</div>
                <div className="flex m-0.5 px-1 rounded-md content-center items-center  bg-orange">Entretenimiento</div>
                <div className="flex m-0.5 px-1 rounded-md content-center items-center  bg-orange">Entretenimiento</div>
            </div>
            <button>
                Guardar
            </button>
        </div>
        <Navbar></Navbar>
      </main>
    </div>
  )
}

export default EventoInfo;