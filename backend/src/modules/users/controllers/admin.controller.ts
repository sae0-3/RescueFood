import { RequestHandler } from 'express';
import { responseBuilder } from '../../../core/common/response-builder';
import { AdminService } from '../services/admin.service';

type AdminParams = {
  id: string;
};

export class AdminController {
  constructor(
    private adminService: AdminService,
  ) { }

  deleteById: RequestHandler<AdminParams> = async (req, res, next) => {
    try {
      const id = req.params.id;
      await this.adminService.delete(id);

      responseBuilder(res, { statusCode: 204 });
    } catch (error) {
      next(error);
    }
  }
}
