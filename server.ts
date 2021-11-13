import 'dotenv/config'; 
import cors from 'cors';
import express from 'express';
import mongoose from 'mongoose';
import morgan from 'morgan';

const { PORT, DB_URL } = process.env;
const app = express()

app.get('/', (req, res) => { 
    res.send('HELLO')
})

//conexao com mongodb
mongoose.set('useCreateIndex', true);
mongoose.set('useUnifiedTopology', true);
mongoose.connect(DB_URL || '', { useNewUrlParser: true });

// Middlewares
app.use(morgan('dev')); // log das requisições 
app.use(express.json()); //Used to parse JSON bodies
app.use(express.urlencoded()); //Parse URL-encoded bodies
app.use(cors());


app.listen('4000');