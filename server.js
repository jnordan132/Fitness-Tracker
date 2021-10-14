const mongoose = require('mongoose');
const express = require('express');
const routes = require('./routes');
require('dotenv').config();

const PORT = process.env.PORT || 3001;
const app = express();

app.use(express.urlencoded({ extended: true }));
app.use(express.static('public'));
app.use(express.json());


mongoose.connect(
    process.env.MONGODB_URI || 'mongodb://localhost/' + process.env.DB_NAME,
    {
        useNewUrlParser: true,
        useUnifiedTopology: true,
        useCreateIndex: true,
        useFindAndModify: false,
    }
);

app.use(routes);

app.listen(PORT, () => {
    console.log(`Live at: http://localhost:${PORT}`);
});