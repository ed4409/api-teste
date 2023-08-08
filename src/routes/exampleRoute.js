// src/routes/exampleRoute.js
import express from 'express';
import multer from 'multer';
import ExampleController from '../controllers/exampleController';

const router = express.Router();
const upload = multer({ dest: 'uploads/' });

const exampleController = new ExampleController();

router.get('/hello', exampleController.getHello);
router.post('/square', exampleController.postSquare);
router.post('/upload', upload.single('zipFile'), exampleController.postUpload);

export default router;
