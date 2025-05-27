import express from 'express';
import 'dotenv/config';
import { db } from './db';
import { produtos } from './schema/produtos';

const app = express();
const port = process.env.PORT || 3000;

app.get('/produtos', async (req, res) => {
  const resultado = await db.select().from(produtos);
  res.json(resultado);
});

app.listen(port, () => {
  console.log(`Servidor rodando na porta ${port}`);
});
