import mysql from 'mysql2/promise';

// Configuración de la conexión
const dbConfig = {
  host: 'localhost',
  port: 3306,
  user: 'root',
  password: '', // Cambia esto según tu configuración
  database: 'test', // Cambia al nombre de tu base de datos
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
      [dbConfig.database, 'Passwords']
    );

    const { count } = results[0];
    if (count > 0) {
      console.log('La tabla "Passwords" ya existe.');
    } else {
      // Crear la tabla si no existe
      console.log('Creando la tabla "Passwords"...');
      await connection.query(`
        CREATE TABLE Passwords (
          id INT AUTO_INCREMENT PRIMARY KEY,
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
