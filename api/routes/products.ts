import express from 'express';

import authController from '../controllers/auth';
import productsController from '../controllers/products';

const router = express.Router();

router.post('/', authController.checkAuth, productsController.create);

router.get('/', authController.checkAuth, productsController.getAll);

export default router;