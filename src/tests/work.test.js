const request = require('supertest');
const jwt = require('jsonwebtoken');

const app = require('../api/app');
const { Work } = require('../database/models');
const { mockWorks } = require('./mocks/work.mock');

const SECRET = 'segredo-de-teste';

describe('Rotas /works', () => {
  let token;

  beforeAll(() => {
    process.env.JWT_SECRET = SECRET;
    token = jwt.sign({ user: 'teste' }, SECRET);
  });

  afterEach(() => {
    jest.restoreAllMocks();
  });

  it('GET /works retorna 200 com todas as obras', async () => {
    jest.spyOn(Work, 'findAll').mockResolvedValue(mockWorks);

    const response = await request(app).get('/works').set('Authorization', token);

    expect(response.status).toBe(200);
    expect(response.body).toEqual(mockWorks);
  });

  it('GET /works/:id retorna 200 com a obra encontrada', async () => {
    jest.spyOn(Work, 'findOne').mockResolvedValue(mockWorks[0]);

    const response = await request(app).get('/works/1').set('Authorization', token);

    expect(response.status).toBe(200);
    expect(response.body).toEqual(mockWorks[0]);
  });

  it('GET /works/:id retorna 404 quando a obra não existe', async () => {
    jest.spyOn(Work, 'findOne').mockResolvedValue(null);

    const response = await request(app).get('/works/999').set('Authorization', token);

    expect(response.status).toBe(404);
    expect(response.body).toEqual({ message: 'Obra não encontrada' });
  });

  it('retorna 401 sem token', async () => {
    const response = await request(app).get('/works');

    expect(response.status).toBe(401);
    expect(response.body).toEqual({ message: 'Token não informado' });
  });

  it('retorna 401 com token inválido', async () => {
    const response = await request(app).get('/works').set('Authorization', 'token-falso');

    expect(response.status).toBe(401);
    expect(response.body).toEqual({ message: 'Token inválido' });
  });

  it('retorna 500 quando JWT_SECRET não está configurado', async () => {
    delete process.env.JWT_SECRET;

    const response = await request(app).get('/works').set('Authorization', token);

    expect(response.status).toBe(500);
    process.env.JWT_SECRET = SECRET;
  });
});
