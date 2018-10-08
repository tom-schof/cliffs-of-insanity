module.exports = async function createUser(req, res) {
    let bcrypt = require('bcryptjs');
    bcrypt.genSalt(10, function(err, salt) {
        bcrypt.hash(req.body.password, salt, async function(err, hash) {
        // Store hash in your password DB.
            const create = await User.create({
            username: req.body.username,
            name: req.body.name,
            password: hash,
            goal: req.body.goal
            
        }).meta({
            fetch: true
        });
        
        return res.status(200).send(create);
        });
    });
    
};