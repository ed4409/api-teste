import ExampleUseCase from '../usecases/exampleUseCase';

class ExampleController {
  constructor() {
    this.useCase = new ExampleUseCase();
  }

  async getHello(req, res) {
    try {
      const message = await this.useCase.getHelloMessage();
      res.status(200).json({ message });
    } catch (error) {
      res.status(500).json({ error: 'Erro ao buscar mensagem de saudação.' });
    }
  }

  async postSquare(req, res) {
    try {
      const { number } = req.body;
      if (typeof number !== 'number') {
        return res.status(400).json({ error: 'O parâmetro "number" deve ser um número.' });
      }
      const result = await this.useCase.calculateSquare(number);
      res.status(200).json({ result });
    } catch (error) {
      res.status(500).json({ error: 'Erro ao calcular o quadrado do número.' });
    }
  }

  async postUpload(req, res) {
    try {
      if (!req.file) {
        return res.status(400).json({ error: 'Nenhum arquivo enviado.' });
      }

      // Aqui você pode tratar o arquivo ZIP recebido, por exemplo, salvar no sistema de arquivos, descompactar, etc.

      res.status(200).json({ message: 'Arquivo ZIP recebido com sucesso!' });
    } catch (error) {
      res.status(500).json({ error: 'Erro ao fazer upload do arquivo ZIP.' });
    }
  }
}

export default ExampleController;
