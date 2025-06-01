
import mysql from 'mysql2/promise';

// Create the connection to database
export const connection = await mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: '123321',
  database: 'test',
});

// if (connection) {
//     console.log("conexion exitosa");
// }else{
//     console.log("Error de conexion");
// }192.168.13.145   192.168.13.93  192.168.13.183

