// Gera um token JWT para testar a API localmente: npm run token
require('dotenv').config({ quiet: true });
const jwt = require('jsonwebtoken');

const secret = process.env.JWT_SECRET;
if (!secret) {
  console.error('Defina JWT_SECRET no arquivo .env antes de gerar o token.');
  process.exit(1);
}

console.log(jwt.sign({ user: 'dev' }, secret, { expiresIn: '1h' }));
