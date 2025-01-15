import express from 'express';
import router from './routes/routes';
import migratePasswordsTable from './config/dbconfig';

const app = express();
app.use(express.json());
app.use(router);

migratePasswordsTable();

const PORT = 3000;

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
 
