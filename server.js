const dotenv = require('dotenv');
const { connect } = require('mongoose');
const app = require('./app');

dotenv.config();

connect(`${process.env.DB_URI}`, () => {
	app.listen(8000);
});
