import express from 'express';
import multer from 'multer';
import ExampleController from './controllers/exampleController';

const router = express.Router();
const upload = multer({ dest: 'uploads/' });

const exampleController = new ExampleController();

/**
 * @swagger
 * /example/hello:
 *   get:
 *     summary: Exemplo de rota "Hello World"
 *     description: Retorna uma mensagem de saudação.
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
 */
router.get('/hello', exampleController.getHello);

/**
 * @swagger
 * /example/square:
 *   post:
 *     summary: Exemplo de rota para cálculo do quadrado de um número
 *     description: Recebe um número e retorna o seu quadrado.
 *     parameters:
 *       - in: body
 *         name: number
 *         description: Número para o cálculo do quadrado
 *         required: true
 *         schema:
 *           type: object
 *           properties:
 *             number:
 *               type: number
 *     responses:
 *       200:
 *         description: Sucesso
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 result:
 *                   type: number
 */
router.post('/square', exampleController.postSquare);

/**
 * @swagger
 * /example/upload:
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
router.post('/upload', upload.single('zipFile'), exampleController.postUpload);

export default router;
