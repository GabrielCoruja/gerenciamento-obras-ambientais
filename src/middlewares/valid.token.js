const jwt = require('jsonwebtoken');

// A aplicação não tem rota de login: o token é gerado fora dela
// (por exemplo, com `npm run token`) usando o mesmo JWT_SECRET.
const validToken = (req, res, next) => {
  const secret = process.env.JWT_SECRET;
  if (!secret) {
    return res.status(500).json({ message: 'JWT_SECRET não configurado' });
  }

  const token = req.headers.authorization;
  if (!token) return res.status(401).json({ message: 'Token não informado' });

  try {
    req.user = jwt.verify(token, secret);
    return next();
  } catch (err) {
    return res.status(401).json({ message: 'Token inválido' });
  }
};

module.exports = validToken;
