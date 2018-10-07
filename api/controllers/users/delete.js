module.exports = function deleteUser(req, res) {
    var username = req.param('username');

    if (!username) {
        return res.badRequest('No username provided.');
    }

    User.findOne(username).done(function(err, result) {
        if (err) return res.serverError(err);

        if (!result) return res.notFound();

        User.destroy(username, function(err) {

            if (err) return next(err);

            console.log(result);

            return res.status(200).send(result);
        });

    });
    
 
};

