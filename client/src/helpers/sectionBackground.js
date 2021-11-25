/**
 * section background style object helper
 * @param {string} img path to image
 * @returns {object} style object
 */
const sectionBackground = img => {
	return {
		backgroundImage: `linear-gradient(to right,
		rgba(15, 22, 38, 0.70),
		rgba(15, 22, 38, 0.70)) ,url('${img}')`,
	};
};

export default sectionBackground;
