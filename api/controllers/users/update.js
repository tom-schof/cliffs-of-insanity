module.exports = function updateUser(req, res) {
	const update = await User.update({
		username: req.params.username,
        name: req.body.name,
        password: req.body.password,
        goal: req.body.goal
	}).meta({fetch: true});

    console.log(update);
	return res.status(200).send(update);
};