require('dotenv').config();

const express = require('express');
const session = require('express-session');

const app = express();

app.use(session({
    secret: process.env.SESSION_SECRET,
    resave: false,
    saveUninitialized: true
}));


app.get('/', (req, res) => {
    res.send('Home');
});


app.listen(process.env.PORT, () => {
    console.log(`Server started on http://localhost:${process.env.PORT}`);
});
