import { Iproduct, IproductCreated } from '../interfaces/Product.interface';

import { productModel } from '../models';

export default class ProductServices {
  static async create(product: Iproduct): Promise<IproductCreated> {
    const createdProduct = await productModel.create(product);
    return createdProduct;
  }

  static async getAll(): Promise<Iproduct[]> {
    const allProducts = await productModel.getAll();
    return allProducts;
  }
}
