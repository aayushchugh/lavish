const path = require('path');
const express = require('express');

const app = express();

const apiAuth = require('./middlewares/apiAuth');
const authRouter = require('./routes/authRouter');

/* ------------------------------- middlewares ------------------------------ */
app.use(express.json());
app.use(apiAuth);

/* --------------------------------- routes --------------------------------- */
app.use('/api', authRouter);

/* ---------------------- render html from build folder --------------------- */
if (process.env.NODE_ENV === 'production') {
	app.use(express.static('client/build'));
	app.get('*', (req, res) => {
		res.sendFile(path.resolve(__dirname, 'client', 'build', 'index.html'));
	});
}

module.exports = app;
