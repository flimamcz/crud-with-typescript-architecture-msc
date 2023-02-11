import { Iproduct, IproductCreated } from '../interfaces/Product.interface';

import ProductModel from '../models/products.model';

export default class ProductServices {
  static async create(product: Iproduct): Promise<IproductCreated> {
    const createdProduct = await ProductModel.create(product);
    return createdProduct;
  }
}
