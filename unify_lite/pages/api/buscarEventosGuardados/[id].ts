import {kuery} from '../../../config/db';

//primero debemos crear la conexión
//con la db
export default async function handler(req:any,res:any){
        try{
            //intentamos hacer nuestra query
            const query:string = 'SELECT id_evento,evento.nombre,lugar.nombre AS lugar, hora,fecha FROM eventoGuardado NATURAL JOIN evento INNER JOIN lugar ON Lugar_id_lugar= id_lugar WHERE id_creador='+req.query.id.toString();
            const values:string[] = [];
            //esta parte ejecuta nuestra consulta por medio de una funcion asincrona
            const data = await kuery(query,[]) ;
 
            res.status(200).json({datos: data});
            //terminamos la conexión por seguridad
            //mostramos en el frontend los valores

        } catch(error:any)
        {
            res.status(500).json({error: error.message});
        }

}