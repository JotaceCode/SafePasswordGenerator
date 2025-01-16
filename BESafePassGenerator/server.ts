import express from 'express';
import router from './routes/routes';
import migratePasswordsTable from './config/dbconfig';
import cors from 'cors'

const app = express();
app.use(express.json());
app.use(router);


// CORS
app.use(cors({
  origin: "http://localhost:3000/",
  methods: ["GET", "POST", "PUT", "DELETE"],
  allowedHeaders: ["Content-Type","Authorization","Access-Control-Allow-Origin"],
}));

// Migrations if needed
migratePasswordsTable();

// Server
const PORT = 3001;

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
 


