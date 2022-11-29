import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link'
import { FormEvent, useCallback, useEffect, useRef, useState } from 'react'
import InputDef from '../components/inputBonito'
import styles from '../styles/Home.module.css'
import mysql from "mysql2/promise"
import { rejects } from 'assert'
import router from 'next/router'

const Registro = () => {
  

    const [nombre, setNombre] = useState("");
    const [clave, setClave] = useState("");
    const [email, setEmail] = useState("");
    const [ig, setIg] = useState("No tiene");
    
    const [dataUsuarios, setdataAmigos] = useState<any[]>([]);
    /*refs para borrar la entrada de los inputs */
    const input1 = useRef<HTMLInputElement>(null);
    const input2 = useRef<HTMLInputElement>(null);
    const input3 = useRef<HTMLInputElement>(null);
    const input4 = useRef<HTMLInputElement>(null);
  
//primero debemos crear la conexión
//con la db
async function getPageData() {
    const objetoPrueba: object = {
        'nombre': nombre,
        'clave': clave,
        'ig': ig,
        'email': email
    }
    console.log(objetoPrueba);
    function getRandomInt(max:number) {
        return Math.floor(Math.random() * max);
      }      
    let numero:number = getRandomInt(1000);
    let importancia:number = getRandomInt(100);
    //INSERT INTO Usuario (id_usuario, apodos, clave, correo, instagram, importancia) VALUES
    const insertarPrueba:string = numero.toString()+','+'"'+nombre+'"'+','+'"'+clave+'"'+','+'"'+email+'"'+','+'"'+ig+'"'+','+importancia.toString();
    //
    console.log(insertarPrueba);
    const apiUrlEndpoint = './api/insertarUsuario/'+insertarPrueba;
    const response = await fetch(apiUrlEndpoint)
    const res = await response.json();
    router.push('/login')
    //alert(res.datos);
  } 

  const verificarUsuario =
    //una promesa es una función que ocurrira eventualmente o nunca
    async () =>{
          const apiUrlEndpoint2 = './api/traerUsuarios';
          const response = await fetch(apiUrlEndpoint2)
          const res2 = await response.json();
          setdataAmigos(res2.usuarios);
          dataUsuarios.map(indice => {
            //traemos los datos
            let nombreVerificar = indice.apodos;
            //los guardamos en un array
            if (nombreVerificar === nombre) {
                alert('Nombre de usuario ya en uso')
                if(input1.current != null){
                    input1.current.value = '';
                    setNombre('');
                }
                return;
                
                //previene un loop
            }
        });
    }
  
    
      
  
  

  const actualizarPagina = async (event:any) =>  {
    event.preventDefault();
    //primero debemos verificar que el usuario no exista en la base de datos
    if(nombre != ''){
        verificarUsuario();
       //buscamos si el dato ya existe
       
    if(nombre != ''){
        await getPageData();
    }
       
    }
    else{
        alert('ingrese un usuario valido');
    }
    if(input1.current != null){
        input1.current.value = '';
        setNombre('');
    }
    if(input2.current != null){
        input2.current.value = '';
        setClave('');
    }
    if(input3.current != null){
        input3.current.value = '';
        setEmail('');
    }
    if(input4.current != null){
        input4.current.value = '';
        setIg('No tiene');
    }

    
    
  }

  useEffect(()=>{
    verificarUsuario()
    
},[nombre]);
      


   
    
    return (
        <div className={styles.container}>
            <Head>
                <title>Registro</title>
                <meta name="description" content="Social Media App" />
                <link rel="icon" href="/Frame.ico" />
            </Head>

            <main className={styles.main}>
                <div className={styles.cajitaScroll}>
                    <h3 className={styles.subtitle}>
                        <a href={'/login'}><img width={22} height={22} src={"/back_arrow.svg"} /></a>Registro
                    </h3>
                    <div className={styles.avisoAdvertencia}>
                        <h1>Ups... esta página no está diseñada para computadores</h1>
                        <h2>Por favor ingresa desde un celular</h2>
                    </div>
                    <form  >
                        <div className={styles.divFila}>
                            <h3>¿Cómo quieres llamarte?</h3>
                            <input ref={input1} name={'nom_user'} required={true} onChange={n => setNombre((n.target as HTMLInputElement).value)  }  />
                        </div>
                        <div className={styles.divFila}>
                            <h3>Escribe una contraseña</h3>
                            <input ref={input2} name={'clave_user'} required={true} type={'password'} onChange={c => setClave((c.target as HTMLInputElement).value)} />
                        </div>
                        <div className={styles.divFila}>
                            <h3>Escribe tu correo</h3>
                            <input ref={input3} name={'correo_user'} type={email} required={true} onChange={e => setEmail((e.target as HTMLInputElement).value)} />
                        </div>
                        <div className={styles.divFila}>
                            <h3>Escribe tu ig (Si tienes)</h3>
                            <input ref={input4} name={'ig_user'} required={true} onChange={i => setIg((i.target as HTMLInputElement).value)} />
                        </div>
                        <footer className={styles.footerNotMain}>
                            <p> <input type={'checkbox'} /> Acepto los términos y condiciones de uso de la aplicación. </p>  <br></br> <a className={styles.linkNegro} href={"../data/policy"}>
                                Politica de tratamiento de datos</a>

                        </footer>
                        <section className={styles.Flex1}>
                            <button className={styles.botonEstandar} onClick={actualizarPagina} >
                                ¡Iniciemos! </button>

                        </section>
                    </form>


                </div>
            </main>


        </div>
    )
}

export default Registro;


