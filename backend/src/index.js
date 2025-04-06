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

app.put('/api/matches', async (req, res) => {
    const { round, team1, team2, goals1, goals2 } = req.body;
    
    /*try {
        const results = await db.query(
            `UPDATE matches 
            SET home_score = $1, away_score = $2 
            WHERE home_team_id = $3 AND away_team_id = $4 AND round = $5`,
            [goals1, goals2, team1, team2, round]
        )
        res.status(200).json({ message: 'Placar atualizado com sucesso!' });
    } catch (err) {
        console.log(err)
        res.status(500).json({ error: 'Erro ao atualizar o placar' });
    }*/

    console.log('Round: ', round)
    console.log('Mandante: ', team1)
    console.log('Visitante: ', team2)
    console.log('Gols Mandante: ', goals1)
    console.log('Gols Visitante: ', goals2)
})

app.listen(PORT, () => {
    console.log(`Servidor rodando na porta ${PORT}`);
});