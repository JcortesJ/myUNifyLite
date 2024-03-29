// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next'


import {kuery} from '../../config/db';

//primero debemos crear la conexión
//con la db
export default async function handler(req:any,res:any){
        try{
            //intentamos hacer nuestra query
            const query:string = 'SELECT * FROM Evento';
            //'SELECT * FROM reportes'
            //'SELECT nombre_variable AS nombre,valor_medicion AS valor FROM registros JOIN sensores ON registros.id_sensor=sensores.id_sensor JOIN variables  ON sensores.id_variable=variables.id_variable'
            const values:string[] = [];
            //esta parte ejecuta nuestra consulta por medio de una funcion asincrona
            const data = await kuery(query,[]) ;
 
            res.status(200).json({reportes: data});
            //terminamos la conexión por seguridad
            //mostramos en el frontend los valores

        } catch(error:any)
        {
            res.status(500).json({error: error.message});
        }

}