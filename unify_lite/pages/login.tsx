import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link'
import { FormEvent, useEffect, useState } from 'react'
import InputDef from '../components/inputBonito'
import styles from '../styles/Login.module.css'
import { useUser } from '../contexts/user'
import { useAuth } from '../contexts/auth'

const Login = () => {
  const { user, setUser } = useUser();
  const { auth, setAuth } = useAuth();
  const [usuario,setUsuario] =useState("");
  const[clave,setClave] = useState("");
  const [dataUsuarios, setdataAmigos] = useState<any[]>([]);




  const onSubmit = (e: FormEvent) => {
    e.preventDefault()

    /*este codigo recibe los datos y los convierte a un objeto */

    const objetoPrueba: object = {
        'usuario': usuario,
        'clave': clave,
    }

    console.log(objetoPrueba)
    actualizarPagina(objetoPrueba);
    // saveFormData(objetoPrueba);
    //primero hay que entender como funciona esto

}

async function getPageData() {
  const apiUrlEndpoint = './api/traerUsuarios';
  const response = await fetch(apiUrlEndpoint)
  const res = await response.json();
  setdataAmigos(res.usuarios);
}

useEffect(
  () => {
    getPageData()
  }
);

async function actualizarPagina(datosLogin:any) {
  await getPageData();
  //map para buscar que los registros si dne 
  dataUsuarios.map(indice => {
    //traemos los datos
    let nombreVerificar = indice.apodos;
    let claveVerificar = indice.clave;
    //los guardamos en un array
    if (nombreVerificar == datosLogin.usuario && claveVerificar == datosLogin.clave) {
      alert('inicio de sesion exitoso ' + usuario);
      setUser(indice.ID);
      //permite acceder a las otras paginas de la app
      setAuth(true);
      window.location.href = '/home/home';

    }
  });
  //luego de hacer el map seteamos la nueva variable
  setTimeout(() => {
    console.log(dataUsuarios);
  }, 200);
  //revisar este error de que este alert se muestre cuando se logea
  if(auth==false){
    alert('Datos invalidos vuelva a intentar');
  }
}

  return (
    <div className={styles.container}>
      <Head>
        <title>Login</title>
        <meta name="description" content="Social Media App" />
        <link rel="icon" href="/Frame.ico" />
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>
          MyUnify
        </h1>
        <div className={styles.avisoAdvertencia}>
          <h1>Ups... esta página no está diseñada para computadores</h1>
          <h2>Por favor ingresa desde un celular</h2>
        </div>

        <div className={styles.divFila}>
          <h3>Usuario</h3>
          <input onChange={i => setUsuario((i.target as HTMLInputElement).value)}/>
        </div>
        <div className={styles.divFila}>
          <h3>Contraseña</h3>
          <input type={'password'} onChange={i => setClave((i.target as HTMLInputElement).value)}/>
        </div>
        <button className={styles.botonLogin}  onClick={onSubmit}>Login </button>
      </main>

      <footer className={styles.footer}>
        <p> No tienes cuenta? </p>  <br></br> <a className={styles.linkNegro} href={"/registro"}>Registrate Aquí</a>
      </footer>
    </div>
  )
}

export default Login;
