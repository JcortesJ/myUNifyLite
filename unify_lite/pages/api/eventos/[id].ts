import {kuery} from '../../../config/db';

//primero debemos crear la conexión
//con la db
export default async function handler(req:any,res:any){
        try{
            //intentamos hacer nuestra query
            const query:string = 'SELECT id_evento,Evento.nombre,Lugar.nombre AS Lugar, hora,fecha, nombre_creador, descripcion FROM Evento INNER JOIN Lugar ON Lugar_id_lugar= id_lugar INNER JOIN Creador ON Creador_id_creador = id_creador WHERE id_evento='+req.query.id.toString();
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