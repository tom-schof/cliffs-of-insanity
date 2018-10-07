module.exports = async function updateUser(req, res) {
	const update = await User.update({
		username: req.params.username,
       
	}).set({
        username: req.body.username,
        name: req.body.name,
        password: req.body.password,
        goal: req.body.goal
    }).fetch();

    console.log(update);
	return res.status(200).send(update);
};