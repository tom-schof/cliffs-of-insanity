const jwt = require('jsonwebtoken');

const getToken = function getToken(bearerToken) {
  return bearerToken.split(' ')[1];
};

module.exports.decode = function decode(token, cb) {
  const decoded = jwt.decode(getToken(token));
  cb(decoded);
};

module.exports.makeToken = function makeToken(user, cb) {
  try {
    return jwt.sign(
      {
        name: user.name,
        username: user.username,
      },
      sails.config.token.secret,
      {
        expiresIn: sails.config.token.expiresIn,
      },
      cb
    );
  } catch (e) {
    console.error(e);
    throw e;
  }
};
