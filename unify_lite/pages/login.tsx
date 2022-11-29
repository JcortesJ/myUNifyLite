import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link'
import { FormEvent, useEffect, useRef, useState } from 'react'
import InputDef from '../components/inputBonito'
import styles from '../styles/Login.module.css'
import { useUser } from '../contexts/user'
import { useAuth } from '../contexts/auth'

const Login = () => {
  const { user, setUser } = useUser();
  const { auth, setAuth } = useAuth();
  const [usuario, setUsuario] = useState("");
  const [clave, setClave] = useState("");
  const input1 = useRef<HTMLInputElement>(null);
  const input2 = useRef<HTMLInputElement>(null);
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
    }, []
  );

  async function actualizarPagina(datosLogin: any) {
    await getPageData();
    let logueado = false;
    console.log(clave);
    //map para buscar que los registros si dne 
    dataUsuarios.map(indice => {
      console.log('indice1'+indice.id_usuario);
      
      //traemos los datos
      let idUser = indice.id_usuario;
      let nombreVerificar = indice.apodos;
      let claveVerificar = indice.clave;
      //los guardamos en un array
      
      if (nombreVerificar == datosLogin.usuario && claveVerificar == datosLogin.clave) {
        alert('inicio de sesion exitoso ' + usuario);
        
        
        //permite acceder a las otras paginas de la app
       
        logueado = true;
        if (input1.current != null) {
          input1.current.value = "";
        }
        if (input2.current != null) {
          input2.current.value = "";
        }
        window.location.href = '/home/'+indice.id_usuario;
        return 0;
      }
    });
    //luego de hacer el map seteamos la nueva variable
    setTimeout(() => {
      console.log(dataUsuarios);
    }, 200);
    //revisar este error de que este alert se muestre cuando se logea
    if (logueado == false) {
      alert('Datos invalidos vuelva a intentar');
      if (input1.current != null) {
        input1.current.value = "";
      }
      if (input2.current != null) {
        input2.current.value = "";
      }
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
          <input ref={input2} onChange={i => setUsuario((i.target as HTMLInputElement).value)} />
        </div>
        <div className={styles.divFila}>
          <h3>Contraseña</h3>
          <input ref={input1} type={'password'} onChange={i => setClave((i.target as HTMLInputElement).value)} />
        </div>
        <button className={styles.botonLogin} onClick={onSubmit}>Login </button>
      </main>

      <footer className={styles.footer}>
        <p> No tienes cuenta? </p>  <br></br> <a className={styles.linkNegro} href={"/registro"}>Registrate Aquí</a>
      </footer>
    </div>
  )
}

export default Login;
