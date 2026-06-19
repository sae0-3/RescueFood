import { RequestHandler } from 'express';
import { responseBuilder } from '../../../core/common/response-builder';
import { DealerOrderService } from '../services/dealer-order.service';

type DealerOrderParams = {
  orderId: string;
};

export class DealerOrderController {
  constructor(
    private orderService: DealerOrderService
  ) { }

  getAllAvailableOrders: RequestHandler = async (req, res, next) => {
    try {
      const data = await this.orderService.getAllAvailableOrders();

      responseBuilder(res, {
        statusCode: 200,
        data,
      });
    } catch (error) {
      next(error);
    }
  }

  accepOrder: RequestHandler<DealerOrderParams> = async (req, res, next) => {
    try {
      const delivery_id = req.user?.id || '';
      const id = req.params.orderId;

      const data = await this.orderService.accepOrder({ id, delivery_id })
      responseBuilder(res, {
        statusCode: 200,
        data,
      });
    } catch (error) {
      next(error);
    }
  }

  getOrderLocationInfo: RequestHandler<DealerOrderParams> = async (req, res, next) => {
    try {
      const delivery_id = req.user?.id || '';
      const id = req.params.orderId;
      const data = await this.orderService.getOrderLocation({ id, delivery_id });

      responseBuilder(res, {
        statusCode: 200,
        data,
      });
    } catch (error) {
      next(error);
    }
  }

  getOrderDetails: RequestHandler<DealerOrderParams> = async (req, res, next) => {
    try {
      const id = req.params.orderId;
      const data = await this.orderService.getOrderDetails(id);

      responseBuilder(res, {
        statusCode: 200,
        data,
      });
    } catch (error) {
      next(error);
    }
  }

  markOrderAsDelivered: RequestHandler<DealerOrderParams> = async (req, res, next) => {
    try {
      const delivery_id = req.user?.id || '';
      const id = req.params.orderId;
      const data = await this.orderService.markOrderAsDelivered({ id, delivery_id });

      responseBuilder(res, {
        statusCode: 200,
        data,
      });
    } catch (error) {
      next(error);
    }
  }

  getHistory: RequestHandler<DealerOrderParams> = async (req, res, next) => {
    try {
      const dealer_id = String(req.user?.id);
      const data = await this.orderService.getHistory(dealer_id);

      responseBuilder(res, {
        statusCode: 200,
        data,
      });
    } catch (error) {
      next(error);
    }
  }

  getOrderFromHistoryById: RequestHandler<DealerOrderParams> = async (req, res, next) => {
    try {
      const dealer_id = String(req.user?.id);
      const order_id = req.params.orderId
      const data = await this.orderService.getOrderFromHistoryById(order_id, dealer_id);

      responseBuilder(res, {
        statusCode: 200,
        data,
      });
    } catch (error) {
      next(error);
    }
  }
} 
