import mysql from "mysql2/promise";

export async function kuery(query:any, values = [] ) {
  const dbconnection = await mysql.createConnection({
    host:'127.0.0.1',
    database:'myunify',
    user:'root',
    
    port:3001,
    password:'toor'
  });
  try {
    const [results] = await dbconnection.execute(query, values);
    //console.log(results);
    dbconnection.end();
    return results;
  } catch (error:any) {
    console.log('hola')
    throw Error(error.message);
  }
}
