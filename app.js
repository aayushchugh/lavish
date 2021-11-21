const express = require('express');

const app = express();

const apiAuth = require('./middlewares/apiAuth');
const authRouter = require('./routes/auth');

/* ------------------------------- middlewares ------------------------------ */
app.use(express.json());
app.use(apiAuth);

/* --------------------------------- routes --------------------------------- */
app.use('/api', authRouter);

module.exports = app;
