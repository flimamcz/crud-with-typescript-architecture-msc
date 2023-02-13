import { Router } from 'express';
import { userController } from '../controllers';
import validationLogin from '../middlewares/user.middleware';

const router = Router();

router.post('/users', userController.create);
router.post('/login', validationLogin, userController.login);

export default router;
