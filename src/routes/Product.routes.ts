import { Router } from 'express';
import productsController from '../controllers/products.controller';

const router = Router();

router.post('/products', productsController.create);
router.get('/products', productsController.getAll);

export default router;
