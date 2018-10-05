module.exports = function listWeight(req, res) {
	const weights = Weight.find({});

	return res.status(200).send(weights);
};
