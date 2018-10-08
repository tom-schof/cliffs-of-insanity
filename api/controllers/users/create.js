module.exports = async function createUser(req, res) {
    const create = await User.create({
        username: req.body.username,
        name: req.body.name,
        password: req.body.password,
        goal: req.body.goal
    }).meta({
        fetch: true
    });

    
    return res.status(200).send(create);
};