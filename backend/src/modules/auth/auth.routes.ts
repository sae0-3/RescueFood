import { Router } from 'express';
import { authenticateJwt, requireRole } from '@/core/common/middlewares';

import { createAuthModule } from './auth.bootstrap';

const router = Router();
const { controllers: {
  authController: controller,
}} = createAuthModule();

router.post('/register', controller.register);
router.post('/login', controller.login);

router.use(authenticateJwt);
router.post('/register/dealer', requireRole(['admin']), controller.registerDealer);
router.post('/register/admin', requireRole(['admin']), controller.registerAdmin);

export default router;
