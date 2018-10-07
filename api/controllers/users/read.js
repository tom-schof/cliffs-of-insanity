module.exports = function readUser(req, res) {
	const read = await User.findOne({
		username: req.params.username
	}).meta({fetch: true});

    console.log(read);
	return res.status(200).send(read);
};