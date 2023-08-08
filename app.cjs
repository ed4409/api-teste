const express = require("express");
const app = express();
const multer = require("multer");
const upload = multer({ dest: "src/uploads/" }); // Ajuste o caminho para a pasta 'uploads' dentro de 'src'

// Configuração do Swagger
const swaggerUi = require("swagger-ui-express");
const swaggerJSDoc = require("swagger-jsdoc");

const swaggerOptions = {
  swaggerDefinition: {
    info: {
      title: "API TEST",
      version: "1.0.0",
      description: "",
    },
  },
  apis: ["./src/routes/*.js"], // Ajuste o caminho para as rotas dentro da pasta 'src'
};

const swaggerSpec = swaggerJSDoc(swaggerOptions);
app.use("/api-docs", swaggerUi.serve, swaggerUi.setup(swaggerSpec));

// Defina as rotas aqui
const exampleRoute = require("./src/routes/example"); // Ajuste o caminho para a pasta 'example' dentro de 'src'
app.use("/example", exampleRoute);

// Rota para o upload do arquivo ZIP
app.post("/upload", upload.single("zipFile"), (req, res) => {
  if (!req.file) {
    return res.status(400).json({ error: "Nenhum arquivo enviado." });
  }

  // Aqui você pode tratar o arquivo ZIP recebido, por exemplo, salvar no sistema de arquivos, descompactar, etc.

  return res.json({ message: "Arquivo ZIP recebido com sucesso!" });
});

// Porta para a execução da API
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Servidor rodando na porta ${PORT}`);
});
