require('dotenv').config()
const mysql = require('mysql2/promise')


export async function kuery(query: any, values:any[] = []) {
  const dbconnection = await mysql.createConnection(process.env.DATABASE_URL);
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

