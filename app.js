const express = require('express');
const notFound = require('./middlewares/not-found');
const router = require('./routes/tasks');
const dotenv = require('dotenv');
const connectDB = require('./db/connectDB');
const app = express();
const port = 3000;
dotenv.config()
app.use(express.json())
app.use('/api/v1/tasks',router);
app.use(notFound);
const start = async() =>{
    try {
        await connectDB(process.env.MONGO_URI)
        app.listen(port,console.log(`Server stared on port : ${port} and connected to DB`));
    } catch (error) {
        console.log(error)
    }
}

start()
