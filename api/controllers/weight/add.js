module.exports = async function addWeight(req, res) {
	
	const add = await Weight.create({
		user: req.params.username,
		pounds: req.body.pounds,
	}).meta({fetch: true});

	return res.status(200).send(add);
};
