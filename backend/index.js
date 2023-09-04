import express from 'express';
const app = express();
import cors from 'cors';

import mongoose from 'mongoose';

import { PORT, mongoURL } from './config.js'
import { Book } from './model/bookModel.js';
import booksRoute from './routes/bookRoutes.js';
//allow all Origins
app.use(cors());

app.use(express.urlencoded({extended: true}));
app.use(express.json());

//books route
app.use('/books', booksRoute);



mongoose.connect(mongoURL)
.then( () => {
    console.log(`connected to DB  `);
    app.listen(PORT, () => {
    console.log(`Server running on PORT ${PORT}`);
})
})
.catch((error) => {
    console.log(`Error connecting to DB : ${error.message}`);
})

