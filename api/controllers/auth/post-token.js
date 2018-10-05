module.exports = async function postToken(req, res) {
  const username = req.body.username;
  const password = req.body.password;
  
  user = await User.findByCredentials(username, password);

  return jwtService.makeToken(user, (err, token) => {
    if (err) {
      return res.unauthorized(err);
    }
    return res.status(200).send(token);
  });

};
