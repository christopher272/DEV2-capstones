const express = require('express');
const app = express();
const mongoose = require('mongoose');
const morgan = require('morgan');
const cors = require('cors');
require('dotenv').config();


app.use(express.json());
app.use(morgan('dev'));
app.use(cors());

async function connectToDb() {
    try {
        await mongoose.connect(process.env.MONGO_URI);
        console.log('connected to DataBase');
    }catch (err) {
        console.error(`failed to connect`,err);
    }
}

connectToDb();

app.use('/dishes', require('./routes/dishRouter'));
console.log(`dishesRouter is running!`)
app.use('/ingredients', require('./routes/ingredientRouter'));
console.log(`ingredientRouter is running!`)

app.use ((err, req, res, next) => {
    console.log(err);
    return res.send({errMsg: err.message});
});

app.listen(9000, () => {
    console.log('server is running on port 9000');
})