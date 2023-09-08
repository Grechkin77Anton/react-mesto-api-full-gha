const jwt = require('jsonwebtoken');

const { SECRET_KEY = 'mesto' } = process.env;
const UnauthorizedError = require('../errors/unauthorizedError');

// console.log(SECRET_KEY);

module.exports = (req, res, next) => {
  const { authorization } = req.headers;
  if (!authorization || !authorization.startsWith('Bearer ')) {
    throw new UnauthorizedError('Необходима авторизация');
  }

  const token = authorization.replace('Bearer ', '');
  let payload;

  try {
    payload = jwt.verify(token, SECRET_KEY);
  } catch (err) {
    throw new UnauthorizedError('Необходима авторизация');
  }

  req.user = payload;
  next();
};
