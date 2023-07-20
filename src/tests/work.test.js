const request = require('supertest');

const app = require('../api/app');
const { Work } = require('../database/models');
const { mockWorks } = require('./mocks/work.mock');

describe('GET/ return Work', () => {
    afterEach(() => {
      jest.clearAllMocks();
    })

  it('Must return 200 to all workes', async () => {
    jest.spyOn(Work, 'findAll').mockResolvedValue(mockWorks);

    const response = await request(app).get('/works');

    console.log(response.body);
    
    expect(response.status).toBe(200);
    expect(response.body).toBeDefined();
    expect(response.body).toEqual(mockWorks);
  });

  it('Must return 200 to one work', async () => {
    jest.spyOn(Work, 'findOne').mockResolvedValue(mockWorks[0]);

    const response = await request(app).get('/works/1');

    console.log(response.body);
    
    expect(response.status).toBe(200);
    expect(response.body).toBeDefined();
    expect(response.body).toEqual(mockWorks[0]);
  });
});
// http://gerenciamento-ambiental-back-env-1.eba-2yat4twf.us-east-2.elasticbeanstalk.com/
