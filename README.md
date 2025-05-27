
# BrewMaster20 - Backend para Cervejaria

Este é um projeto Node.js com TypeScript, Express e PostgreSQL, pronto para rodar localmente ou no Railway.

## 🚀 Como usar

### 1. Instale as dependências (ignorando peer dependencies opcionais do React Native)

```bash
npm install --legacy-peer-deps
```

### 2. Crie o arquivo `.env` na raiz com sua DATABASE_URL

Exemplo:

```
DATABASE_URL=postgres://usuario:senha@host:porta/banco
```

### 3. Rode o build e inicie

```bash
npm run build
npm start
```

## ☁️ Deploy no Railway

- Build command: `npm run build`
- Start command: `npm start`
- Adicione a variável `DATABASE_URL` no painel de variáveis do Railway

Pronto! Sua API estará disponível na nuvem.
