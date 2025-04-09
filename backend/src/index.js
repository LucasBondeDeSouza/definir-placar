import express from 'express'
import cors from 'cors'

import db from "../src/config/db.js"

const app = express()
const PORT = 5000
app.use(cors());
app.use(express.json());

app.get('/api/teams', async (req, res) => {
    try {
        const results = await db.query('SELECT id, name FROM teams');
        res.json(results.rows);
    } catch (err) {
        console.error(err)
        res.status(500).json({ error: 'Erro ao buscar os dados' });
    }
})

app.listen(PORT, () => {
    console.log(`Servidor rodando na porta ${PORT}`);
});