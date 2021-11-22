const dotenv = require('dotenv');
const { connect } = require('mongoose');
const app = require('./app');

dotenv.config();

const PORT = process.env.PORT || 8000;

connect(`${process.env.DB_URI}`, () => {
	app.listen(PORT);
});
