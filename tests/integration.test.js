// tests/integration.test.js
import request from 'supertest';
import app from '..'; // Importe o arquivo app.js ou o módulo express do seu aplicativo

describe('Integration Tests', () => {
  it('should return "Hello World" when accessing /example/hello', async () => {
    const response = await request(app).get('/example/hello');
    expect(response.status).toBe(200);
    expect(response.body.message).toBe('Hello World');
  });

  it('should calculate the square of a number when posting to /example/square', async () => {
    const response = await request(app)
      .post('/example/square')
      .send({ number: 5 });

    expect(response.status).toBe(200);
    expect(response.body.result).toBe(25);
  });

  // Adicione mais testes de integração conforme necessário
});
