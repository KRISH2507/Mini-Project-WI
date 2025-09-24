// backend/app.js
const express = require('express');
const { Client } = require('pg');
const app = express();
const port = process.env.PORT || 5000;

const dbClient = new Client({
  host: process.env.DB_HOST || 'db',      // default 'db' to work with docker-compose
  user: process.env.DB_USER || 'postgres',
  password: process.env.DB_PASSWORD || 'example',
  database: process.env.DB_NAME || 'testdb',
  port: process.env.DB_PORT ? Number(process.env.DB_PORT) : 5432,
});

dbClient.connect()
  .then(() => console.log('Connected to Postgres'))
  .catch((err) => console.error('Failed to connect to Postgres', err));

app.get('/api', async (req, res) => {
  try {
    const result = await dbClient.query('SELECT NOW() AS time');
    res.send(`Hello from Express + Postgres! Server time: ${result.rows[0].time}`);
  } catch (err) {
    console.error('DB query error:', err);
    res.status(500).send('Database error');
  }
});

app.listen(port, () => {
  console.log(`Backend listening at http://0.0.0.0:${port}`);
});
