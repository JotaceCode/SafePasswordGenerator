import mysql from 'mysql2/promise';


// Create the connection pool. The pool-specific settings are the defaults
const bd1: any = mysql.createPool({
  host: 'localhost',
  user: 'root',
  database: 'test',
  port: 3306,
  waitForConnections: true,
  connectionLimit: 10,
  maxIdle: 10, // max idle connections, the default value is the same as `connectionLimit`
  idleTimeout: 60000, // idle connections timeout, in milliseconds, the default value 60000
  queueLimit: 0,
  enableKeepAlive: true,
  keepAliveInitialDelay: 0,
});


export default bd1;