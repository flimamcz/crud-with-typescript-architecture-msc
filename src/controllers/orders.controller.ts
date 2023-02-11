import { Request, Response } from 'express';
import { ordersServices } from '../services';

export default class OrdersController {
  static async getAll(_req: Request, res: Response): Promise<Response> {
    const orders = await ordersServices.getAll();
    return res.status(200).json(orders);
  }
}
