export const PORT =  process.env.PORT || 3001 ; // Default port for the server

export const DB_HOST = process.env.DB_HOST || 'localhost'; // Database host
export const DB_USER = process.env.DB_USER || 'root'; // Database user
export const DB_PASSWORD = process.env.DB_PASSWORD || ''; // Database password
export const DB_DATABASE = process.env.DB_DATABASE || 'passwords'; // Database name
export const DB_PORT = process.env.DB_PORT ? parseInt(process.env.DB_PORT) : 3306; // Database port 