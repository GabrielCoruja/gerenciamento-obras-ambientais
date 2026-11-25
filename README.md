# 🌱 Gerenciamento de Obras Ambientais

API REST em Node.js para consulta de obras com foco em sustentabilidade, como construções com energia solar, captação de água da chuva e telhados verdes. As rotas são protegidas por autenticação JWT.

![Node.js](https://img.shields.io/badge/Node.js-339933?style=flat-square&logo=nodedotjs&logoColor=white)
![Express](https://img.shields.io/badge/Express_5-000000?style=flat-square&logo=express&logoColor=white)
![Sequelize](https://img.shields.io/badge/Sequelize-52B0E7?style=flat-square&logo=sequelize&logoColor=white)
![MySQL](https://img.shields.io/badge/MySQL-4479A1?style=flat-square&logo=mysql&logoColor=white)
![JWT](https://img.shields.io/badge/JWT-000000?style=flat-square&logo=jsonwebtokens&logoColor=white)
![Jest](https://img.shields.io/badge/Jest-C21325?style=flat-square&logo=jest&logoColor=white)

## Funcionalidades

- Listar todas as obras cadastradas
- Buscar uma obra pelo `id`, com resposta `404` quando ela não existe
- Proteger as rotas com token JWT
- Popular o banco com obras de exemplo (migrations e seeders do Sequelize)

## Arquitetura

O projeto segue uma arquitetura em camadas:

```
src/
├── api/            # app Express e inicialização do servidor
├── routes/         # definição das rotas
├── middlewares/    # validação do token JWT
├── controllers/    # recebe a requisição e monta a resposta
├── services/       # regras de negócio e acesso aos models
├── database/       # config, models, migrations e seeders (Sequelize)
└── tests/          # testes de integração com Jest e Supertest
```

## Como executar

**Pré-requisitos:** Node.js 22 ou superior e MySQL 8 (ou Docker).

1. Clone o repositório e instale as dependências
   ```sh
   git clone https://github.com/GabrielCoruja/gerenciamento-obras-ambientais.git
   cd gerenciamento-obras-ambientais
   npm install
   ```

2. Crie o arquivo `.env` a partir do exemplo e ajuste os valores
   ```sh
   cp .env.example .env
   ```

3. Suba o MySQL (pule este passo se já tiver um MySQL local)
   ```sh
   docker compose up -d
   ```

4. Crie o banco, rode as migrations e os seeders
   ```sh
   npm run db:reset
   ```

5. Inicie a API
   ```sh
   npm run dev
   ```

A API sobe em `http://localhost:3000`.

## Autenticação

A API não tem rota de login. Para testar, gere um token com o mesmo `JWT_SECRET` do `.env`:

```sh
npm run token
```

Envie o token no header `Authorization` de cada requisição.

## Endpoints

| Método | Rota | Descrição | Respostas |
| :-- | :-- | :-- | :-- |
| `GET` | `/` | Verifica se a API está no ar | `200` |
| `GET` | `/works` | Lista todas as obras | `200`, `401` |
| `GET` | `/works/:id` | Busca uma obra pelo id | `200`, `401`, `404` |

Exemplo:

```sh
curl -H "Authorization: <seu-token>" http://localhost:3000/works/1
```

```json
{
  "id": 1,
  "title": "Oásis Urbano Sustentável",
  "description": "Um projeto inovador de construção que integra soluções sustentáveis...",
  "createdAt": "2026-01-01T00:00:00.000Z",
  "updatedAt": "2026-01-01T00:00:00.000Z"
}
```

## Testes

```sh
npm test
```

Os testes usam mocks dos models e não precisam de banco de dados. Eles também rodam no GitHub Actions a cada push e pull request.

## Licença

Distribuído sob a licença MIT. Veja [LICENSE](LICENSE).

---

Feito por [Gabriel Dalseco](https://www.linkedin.com/in/gabrieldalseco/).
