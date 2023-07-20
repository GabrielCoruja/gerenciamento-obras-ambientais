const jwt = require('jsonwebtoken');

const secret = process.env.JWT_SECRET || 'secret';


// APLICAÇÃO NÃO TEM LOGIN, É SÓ PARA TESTES NA AWS
const validToken = (req, res, next) => {
  const token = req.headers.authorization;
  if (!token) return res.status(401).json({ message: 'missing auth token' });
  try {
    const decoded = jwt.verify(token, secret);
    req.user = decoded;
    next();
  } catch (err) {
    return res.status(401).json({ message: 'jwt malformed' });
  }
}

module.exports = validToken;
