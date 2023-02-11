import { Request, Response } from 'express';
import ProductServices from '../services/Products.services';

export default class ProductController {
  static async create(req: Request, res: Response): Promise<Response> {
    const { name, amount } = req.body;
    const createdProduct = await ProductServices.create({ name, amount });
    return res.status(201).json(createdProduct);
  }

  static async getAll(_req: Request, res: Response): Promise<Response> {
    const allProducts = await ProductServices.getAll();
    return res.status(200).json(allProducts);
  }
}
