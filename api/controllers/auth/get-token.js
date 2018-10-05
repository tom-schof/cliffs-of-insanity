module.exports = function getLogin(req, res) {
  return jwtService.makeToken(req.user, (err, tok) => {
    if (err) {
      return res.unauthorized(err);
    }
    return res.status(200).send(tok);
  });
};
