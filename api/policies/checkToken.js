const jwt = require('jsonwebtoken');

module.exports = function checkToken(req, res, next) {
  let token;
  if (req.headers.authorization && req.headers.authorization.startsWith('Bearer ')) {
    // Get the token from the Authorization header, skip 'Bearer ' prefix
    token = req.headers.authorication.substr(7);
  } else if (req.param('token')) {
    token = req.param('token');
  } else {
    console.log(`Request attempt without a valid token.`);
    return res.unauthorized('No token found');
  }

  jwt.verify(token, sails.config.token.secret, async function tokenVerified(err, decoded) {
    if (err) {
      console.error(`Token is expired, invalid, or incorrect: ${err}`);
      return res.unauthorized('Invalid or expired token');
    }

		console.log(decoded);
    req.user = await User.findOne({username: decoded.username});

    return next();
  });
  return null;
};
