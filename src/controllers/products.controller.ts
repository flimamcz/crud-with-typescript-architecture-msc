import { Request, Response } from 'express';
import ProductServices from '../services/Products.services';

export default class ProductController {
  static async create(req: Request, res: Response): Promise<void> {
    const { name, amount } = req.body;
    const createdProduct = ProductServices.create({ name, amount });

    res.status(201).json(createdProduct);
  }
}
