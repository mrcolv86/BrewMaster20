import { pgTable, serial, text, varchar } from 'drizzle-orm/pg-core';

export const produtos = pgTable('produtos', {
  id: serial('id').primaryKey(),
  nome: varchar('nome', { length: 255 }),
  descricao: text('descricao'),
});
