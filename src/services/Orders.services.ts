import Iorder from '../interfaces/Order.interface';

import { ordersModel } from '../models';

export default class UserServices {
  static async getAll(): Promise<Iorder[]> {
    const allProducts = await ordersModel.getAll();
    return allProducts;
  }
}
