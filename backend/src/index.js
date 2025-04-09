import express from 'express'
import cors from 'cors'

import db from "../src/config/db.js"

const app = express()
const PORT = 5000
app.use(cors());
app.use(express.json());

app.put('/api/matches', async (req, res) => {
    const {round, home_team_id, away_team_id, home_score, away_score} = req.body
    
    try {
        await db.query(
            `UPDATE matches
            SET home_score = $1, away_score = $2
            WHERE home_team_id = $3 AND away_team_id = $4 AND round = $5`,
            [home_score, away_score, home_team_id, away_team_id, round]
        )
        res.status(200).json({ message: "Placar atualizado com sucesso." });
    } catch (err) {
        console.error("Erro ao atualizar placar:", err);
        res.status(500).json({ error: "Erro ao atualizar placar." });
    }
})

app.listen(PORT, () => {
    console.log(`Servidor rodando na porta ${PORT}`);
});