import { Router } from 'express';
import { ordersController } from '../controllers';

const router = Router();

router.get('/orders', ordersController.getAll);

export default router;
