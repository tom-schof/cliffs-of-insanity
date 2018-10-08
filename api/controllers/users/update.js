module.exports = async function updateUser(req, res) {
    let bcrypt = require('bcryptjs');
    bcrypt.genSalt(10, function (err, salt) {
        bcrypt.hash(req.body.password, salt, async function (err, hash) {

            const update = await User.update({
                username: req.params.username,

            }).set({
                username: req.body.username,
                name: req.body.name,
                password: hash,
                goal: req.body.goal
            }).fetch();

            console.log(update);
            return res.status(200).send(update);
        });
    });
  
};