

import { kuery } from '../../../config/db';


//primero debemos crear la conexión
//con la db
export default async function handler(req:any,res:any){
        try{
            //intentamos hacer nuestra query

            const query:string = 'UPDATE usuario SET '+req.query.modUsuario;
            //'UPDATE Usuario SET '+req.query.modUsuario+' WHERE id_usuario=';
            const data = await kuery(query,[]);
            
            res.status(200).json({datos: data});
            //terminamos la conexión por seguridad
            //mostramos en el frontend los valores

        } catch(error:any)
        {
            res.status(500).json({error: error.message});
        }

}