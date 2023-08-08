// src/usecases/exampleUseCase.js
import ExampleDataSource from '../dataSources/exampleDataSource';

class ExampleUseCase {
  constructor() {
    this.dataSource = new ExampleDataSource();
  }

  async performExampleAction() {
    // Lógica do caso de uso
  }
}

export default ExampleUseCase;
