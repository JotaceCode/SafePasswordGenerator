import mysql from 'mysql2/promise';
import {
  DB_HOST,
  DB_PORT,
  DB_USER,
  DB_PASSWORD,
  DB_DATABASE,
} from './config';

// Configuración de la conexión
export const dbConfig = {
  host: DB_HOST,
  port: DB_PORT,
  user: DB_USER,
  password: DB_PASSWORD,
  database: DB_DATABASE,
};

// Método para comprobar y crear la tabla
async function migratePasswordsTable() {
  const connection = await mysql.createConnection(dbConfig);

  try {
    // Verificar si la tabla existe
    const [results]:any = await connection.query(`
      SELECT COUNT(*) AS count
      FROM information_schema.tables 
      WHERE table_schema = ? AND table_name = ?`,
      [dbConfig.database, DB_DATABASE]
    );

    const { count } = results[0];
    if (count > 0) {
      console.log('La tabla "Passwords" ya existe.');
    } else {
      // Crear la tabla si no existe
      console.log('Creando la tabla "Passwords"...');
      await connection.query(`
        CREATE TABLE passwords (
          id_pass INT AUTO_INCREMENT PRIMARY KEY,
          password VARCHAR(255) NOT NULL,
          characters INT NOT NULL,
          createdAt DATETIME NOT NULL DEFAULT NOW(),
          updatedAt DATETIME NOT NULL DEFAULT NOW() ON UPDATE NOW()
        );
      `);
      console.log('La tabla "Passwords" ha sido creada correctamente.');
    }
  } catch (error) {
    console.error('Error durante la migración:', error);
  } finally {
    await connection.end();
  }
}

export default migratePasswordsTable;
