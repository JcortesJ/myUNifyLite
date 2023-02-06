
import {kuery} from '../../config/db';

//primero debemos crear la conexión
//con la db
export default async function handler(req:any,res:any){
        try{
            //intentamos hacer nuestra query
            const query:string = 'SELECT A.apodos,amigos,parches,A.ID FROM (SELECT apodos,COUNT(id_usuario) as amigos, id_usuario as ID FROM Usuario RIGHT JOIN Amigos ON id_usuario = id_amigo1 WHERE id_usuario = id_amigo1 group by apodos) AS A JOIN (select apodos,COUNT(id_fraternidad) as parches FROM Usuario group by apodos) AS B ON A.apodos = B.apodos';
            //'SELECT * FROM reportes'
            //'SELECT nombre_variable AS nombre,valor_medicion AS valor FROM registros JOIN sensores ON registros.id_sensor=sensores.id_sensor JOIN variables  ON sensores.id_variable=variables.id_variable'
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