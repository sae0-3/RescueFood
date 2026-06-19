import { RequestHandler } from 'express-serve-static-core';
import { responseBuilder } from '../../../core/common/response-builder';
import { AdminOrderService } from '../services/admin-order.service';

type AdminOrderParams = {
  orderId: string;
};

export class AdminOrderController {
  constructor(
    private adminOrderService: AdminOrderService,
  ) { }

  getAll: RequestHandler = async (req, res, next) => {
    try {
      const data = await this.adminOrderService.findAll();

      responseBuilder(res, {
        statusCode: 200,
        data,
      });
    } catch (error) {
      next(error);
    }
  }

  getById: RequestHandler<AdminOrderParams> = async (req, res, next) => {
    try {
      const order_id = req.params.orderId;
      const data = await this.adminOrderService.findById(order_id);

      responseBuilder(res, {
        statusCode: 200,
        data,
      });
    } catch (error) {
      next(error);
    }
  }

  cancel: RequestHandler<AdminOrderParams> = async (req, res, next) => {
    try {
      const order_id = req.params.orderId;
      const data = await this.adminOrderService.cancelById(order_id);

      responseBuilder(res, {
        statusCode: 200,
        data,
      });
    } catch (error) {
      next(error);
    }
  }
}
