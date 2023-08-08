import ExampleController from '../src/controllers/exampleController';

describe('ExampleController', () => {
  it('should calculate the square of a number', async () => {
    const exampleController = new ExampleController();

    const mockRequest = {
      body: {
        number: 5, // Coloque o número que você deseja calcular o quadrado
      },
    };

    const mockResponse = {
      json: jest.fn(),
    };

    await exampleController.postSquare(mockRequest, mockResponse);

    // Verifique se o método json foi chamado com o resultado esperado (nesse caso, o quadrado do número)
    expect(mockResponse.json).toHaveBeenCalledWith({ result: 25 }); // Resultado esperado: 5 * 5 = 25
  });
});
