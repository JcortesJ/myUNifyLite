var mysql = require('mysql');

export async function insertion(Query: any, values: any) {
    var dbconnection =  mysql.createConnection({
      host: 'localhost',
      database: 'myunify',
      user: 'root',
      port: 3306,
      password: 'toor'
    });

   
    /*
    try {
      
  
     // dbconnection.query(Query,values);
      
      dbconnection.connect();
         await dbconnection.query(Query, [values]);
      //console.log(results);
      dbconnection.end();
  
    } catch (error: any) {
      throw Error(error.message);
  
    }
    */
    dbconnection.connect(function(err:Error) {
      if (err) throw err;
      console.log("Connected!");
      const sql = "INSERT INTO creador (id_creador, nombre_creador) VALUES ?";
      var values = [23432,'jiji'];
      dbconnection.query(sql, [values], function (err: any, result: { affectedRows: string; }) {
        if (err) throw err;
        console.log("Number of records inserted: " + result.affectedRows);
      });
    });
  }
  
  
  
  
  /*
  function(err) {
        if (err) throw err;
        console.log("Connected!");
        var sql = "INSERT INTO customers (name, address) VALUES ?";
        var values = [
          ['John', 'Highway 71'],
          ['Peter', 'Lowstreet 4'],
          ['Amy', 'Apple st 652'],
          ['Hannah', 'Mountain 21'],
          ['Michael', 'Valley 345'],
          ['Sandy', 'Ocean blvd 2'],
          ['Betty', 'Green Grass 1'],
          ['Richard', 'Sky st 331'],
          ['Susan', 'One way 98'],
          ['Vicky', 'Yellow Garden 2'],
          ['Ben', 'Park Lane 38'],
          ['William', 'Central st 954'],
          ['Chuck', 'Main Road 989'],
          ['Viola', 'Sideway 1633']
        ];
        dbconnection.query(sql, [values], function (err: any, result: { affectedRows: string; }) {
          if (err) throw err;
          console.log("Number of records inserted: " + result.affectedRows);
        });
      }
  
  */