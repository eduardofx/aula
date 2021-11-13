import express from 'express'
import 'dotenv/config'; 

const { PORT, DB_URL } = process.env;
const app = express()

app.get('/', (req, res) => {
    res.send('HELLO')
})

app.listen('4000');