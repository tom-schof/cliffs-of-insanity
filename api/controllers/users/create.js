module.exports = function createUser(req, res) {
	const create = await User.create({
		username: req.params.username,
        name: req.body.name,
        password: req.body.password,
        goal: req.body.goal
	}).meta({fetch: true});

    console.log(create);
	return res.status(200).send(create);
};