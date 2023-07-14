import express from 'express';
import router from './routes/index.js';
import connectDB from './db/connectdb.js';

const PORT = process.env.PORT || '8080'
const DB_URL = process.env.DB_URL || 'mongodb://127.0.0.1:27017'
const app = express()

app.use(express.json());
app.use(express.urlencoded({extended:true}))

// setting public files
app.use(express.static('public'))

// setting up template engine 
app.set('view engine', 'ejs');

app.use(router)

// Server listening in port 
app.listen(PORT, ()=>{
    connectDB(DB_URL)
    console.log(`App listening on port http://localhost:${PORT}`)
})