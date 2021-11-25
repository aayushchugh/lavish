/**
 * @param {string} uri
 * @param {object} data
 * @returns {object} response
 */
const post = async (uri, data) => {
	const response = await fetch(uri, {
		method: 'POST',
		headers: {
			'Content-Type': 'application/json',
			Accept: 'application/json',
		},
		body: JSON.stringify(data),
	});

	return await response.json();
};

export default post;
