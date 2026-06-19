import { Router } from 'express';
import { authenticateJwt, requireRole } from '@/core/common/middlewares';

import { createLocationsModule } from './locations.bootstrap';

const router = Router();
const { controllers: {
  locationController: controller,
}} = createLocationsModule();

router.use(authenticateJwt, requireRole(['client']));

router.get('/', controller.getAll);
router.post('/', controller.create);
router.delete('/:id', controller.remove);

export default router;
