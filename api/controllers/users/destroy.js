module.exports = async function destroyUser(req, res) {
    var username = req.params.username;

    if (username == "") {
        return res.badRequest('No username provided.');
    } else {
        const destroy = await User.destroy({
            username: username
        }).meta({
            fetch: true
        });

        return res.json(destroy);
    }



};