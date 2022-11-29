import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link'
import { FormEvent, useEffect, useRef, useState } from 'react'
import { useUser } from '../../contexts/user'
import styles from '../../styles/Home.module.css'
const EditarUsuario = () => {
    const { user, setUser } = useUser();
    const [nombre, setNombre] = useState("");
    const [clave, setClave] = useState("");
    const [ig, setIg] = useState("No tiene");
    const [dataUsuarios, setdataAmigos] = useState<any[]>([]);
    /*refs para borrar la entrada de los inputs */
    const input1 = useRef<HTMLInputElement>(null);
    const input2 = useRef<HTMLInputElement>(null);
    const input3 = useRef<HTMLInputElement>(null);


  
//primero debemos crear la conexión
//con la db
async function getPageData() {
    const objetoPrueba: object = {
        'nombre': nombre,
        'clave': clave,
        'ig': ig,
    }
    console.log(objetoPrueba);
 
    //UPDATE usuario SET apodos=?, clave=?,instagram=? WHERE id_usuario=?
    const actualizarPrueba:string = 'apodos='+'"'+nombre+'"'+', clave='+'"'+clave+'"'+', instagram='+'"'+ig+'"'+' WHERE id_usuario='+user;
    
    console.log(actualizarPrueba);
    const apiUrlEndpoint = '../api/modificarUsuario/'+actualizarPrueba;
    const response = await fetch(apiUrlEndpoint)
    const res = await response.json();
    //alert(res.datos);
  } 

  const verificarUsuario =
    //una promesa es una función que ocurrira eventualmente o nunca
    async () =>{
          const apiUrlEndpoint2 = '../api/traerUsuarios';
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
        alert('usuario actualizado');
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
        setIg('No tiene');
    }

    
    
  }

  useEffect(()=>{
    verificarUsuario()
    
},[nombre]);
      



    function molestar() {
        alert('Aqui cambiaria una imagen, si tan solo tuviera una');
    }
    return (
        <div className={styles.container}>
            <Head>
                <title>Editar Usuario</title>
                <meta name="description" content="Social Media App" />
                <link rel="icon" href="/Frame.ico" />
            </Head>

            <main className={styles.main}>
                <div className={styles.cajitaScroll}>
                    <h3 className={styles.subtitle}>
                        <a href={'/perfil/vistaPerfil'}><img width={22} height={22} src={"/back_arrow.svg"} /></a>Editar Usuario
                    </h3>

                    <div className={styles.avisoAdvertencia}>
                        <h1>Ups... esta página no está diseñada para computadores</h1>
                        <h2>Por favor ingresa desde un celular</h2>
                    </div>
                    <div className={styles.circuloUsuario}>
                        <img src={'/circ_mas.svg'} alt={'jijia'} onClick={molestar}></img>
                    </div>
                    <form >
                        <div className={styles.divFila}>
                            <h3>¿Quieres cambiar tu usuario?</h3>
                            <input ref={input1} name={'nom_user'} required={true} onChange={n => setNombre((n.target as HTMLInputElement).value)} />
                        </div>
                        <div className={styles.divFila}>
                            <h3>¿Vas a escoger una contraseña nueva?</h3>
                            <input ref={input2} name={'clave_user'} required={true} onChange={l => setClave((l.target as HTMLInputElement).value)} />
                        </div>
                        <div className={styles.divFila}>
                            <h3>¿Vas a cambiar tu ig?</h3>
                            <input ref={input3} name={'ig_user'} required={true} onChange={d => setIg((d.target as HTMLInputElement).value)} />
                            {/*cambiar por un textfield */}
                        </div>




                        <section className={styles.Flex2}>
                            <button className={styles.botonEstandar}  onClick={actualizarPagina}>
                                { /*<Link href={"/evento/crearEvento"}> */}Aceptar{ /*</Link> */} </button>
                            <button className={styles.botonEstandar} type="submit" >
                                <Link href={"/perfil/vistaPerfil"}> Cancelar</Link>  </button>
                        </section>
                    </form>
                </div>


            </main>


        </div>
    )
}

export default EditarUsuario;
