import express from 'express'
import cors from 'cors'

import db from "../src/config/db.js"

const app = express()
const PORT = 5000
app.use(cors());
app.use(express.json());


app.listen(PORT, () => {
    console.log(`Servidor rodando na porta ${PORT}`);
});