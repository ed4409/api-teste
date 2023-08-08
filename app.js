import express from "express";
import swaggerUi from "swagger-ui-express";
import swaggerJSDoc from "swagger-jsdoc";
import exampleRoute from './src/routes/exampleRoute'; // O caminho deve ser corretamente relativo à localização do app.js


const app = express();

// Configuração do Swagger
const swaggerOptions = {
  definition: {
    openapi: "3.0.0",
    info: {
      title: "API TEST",
      version: "1.0.0",
      description: "",
    },
  },
  apis: ["./src/routes/exampleRoute.js"], // Caminho para o arquivo de definição da rota
};

const swaggerSpec = swaggerJSDoc(swaggerOptions);

// Rota de documentação do Swagger
app.use("/api-docs", swaggerUi.serve, swaggerUi.setup(swaggerSpec));

// Rotas da API
app.use("/example", exampleRoute);

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Servidor rodando na porta ${PORT}`);
});
