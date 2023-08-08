// src/controllers/exampleController.js
import ExampleUseCase from '../usecases/exampleUseCase';

class ExampleController {
  constructor() {
    this.useCase = new ExampleUseCase();
  }

  async getHello(req, res) {
    // Implementação do controlador
  }

  async postSquare(req, res) {
    // Implementação do controlador
  }

  async postUpload(req, res) {
    // Implementação do controlador
  }
}

export default ExampleController;
