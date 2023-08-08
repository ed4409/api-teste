const express = require("express");
const app = express();
const multer = require("multer");
const upload = multer({ dest: "uploads/" });

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
  apis: ["./routes/example.js"], // Caminho para o arquivo de definição da rota
};

const swaggerSpec = swaggerJSDoc(swaggerOptions);
app.use("/api-docs", swaggerUi.serve, swaggerUi.setup(swaggerSpec));

// Importe o arquivo example.js corretamente
const exampleRoute = require("./routes/example");
app.use("/example", exampleRoute);

// Defina as rotas aqui

// Rota para o upload do arquivo ZIP
/**
 * @swagger
 * /upload:
 *   post:
 *     summary: Upload de arquivo ZIP
 *     description: Faz o upload de um arquivo ZIP.
 *     consumes:
 *       - multipart/form-data
 *     parameters:
 *       - in: formData
 *         name: zipFile
 *         required: true
 *         type: file
 *     responses:
 *       200:
 *         description: Sucesso
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 message:
 *                   type: string
 *       400:
 *         description: Requisição inválida
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 error:
 *                   type: string
 */
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
