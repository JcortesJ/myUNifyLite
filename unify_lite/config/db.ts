import mysql from "mysql2/promise";


export async function kuery(query: any, values:any[] = []) {
  const dbconnection = await mysql.createConnection({
    host: 'localhost',
    database: 'myunify',
    user: 'root',
    port: 3306,
    password: ''
  });
  try {
    const [results] = await dbconnection.execute(query, values);
    //console.log(results);
    dbconnection.end();
    return results;
  } catch (error:any) {
    console.log('error')
    throw Error(error.message);

  }
}

/**
 *  credenciales jeff
 *     host: 'localhost',
    database: 'myunify',
    user: 'root',
    port: 3306,
    password: ''
 * 
 * 
 */