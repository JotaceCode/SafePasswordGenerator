import express from 'express';
import router from './routes/routes';
import migratePasswordsTable from './config/dbconfig';
import cors from 'cors'
import { PORT } from './config/config';

const app = express();
app.use(express.json());

// CORS deben estar por encima de las rutas, sino no se aplican !!!!!IMPORTANTE!!!!!!
app.use(cors({
  origin: "https://safe-password-generator-vert.vercel.app",
  methods: ["GET", "POST", "PUT", "DELETE"],
  allowedHeaders: ["Content-Type","Authorization"],
  credentials: true, 
}));

app.use(router);

// Migrations if needed
migratePasswordsTable();


app.listen(PORT, () => {
  console.log(`Server is running on ${PORT}`);
});
 


