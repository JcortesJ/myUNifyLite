

import { kuery } from '../../../config/db';


//primero debemos crear la conexión
//con la db
export default async function handler(req:any,res:any){
        try{
            //intentamos hacer nuestra query
            const query:string = 'INSERT INTO Usuario (id_usuario, apodos, clave, correo, instagram, importancia)  VALUES ('+req.query.insertU+')';
         
            const data = await kuery(query,[]);
            
            res.status(200).json({datos: data});
            //terminamos la conexión por seguridad
            //mostramos en el frontend los valores

        } catch(error:any)
        {
            res.status(500).json({error: error.message});
        }

}