const apiAuth = (req, res, next) => {
	const authHeader = req.headers.authorization;

	if (!authHeader) {
		return res.status(401).json({
			status: 'error',
			message: 'API key is required',
		});
	}

	if (authHeader === `${process.env.API_KEY}`) {
		next();
	} else {
		return res.status(401).json({
			status: 'error',
			message: 'Invalid Token',
		});
	}
};

module.exports = apiAuth;
