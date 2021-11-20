const express = require('express');
const bodyParser = require('body-parser');

const app = express();

const authRouter = require('./routes/auth');

/* ------------------------------- middlewares ------------------------------ */
app.use(express.json());
app.use(bodyParser.urlencoded({ extended: true }));

/* --------------------------------- routes --------------------------------- */
app.use('/api', authRouter);

module.exports = app;
