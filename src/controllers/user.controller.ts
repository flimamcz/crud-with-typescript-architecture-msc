import { Request, Response } from 'express';
import { userServices } from '../services';

export default class UserController {
  static async create(req: Request, res: Response): Promise<Response> {
    const { username, vocation, level, password } = req.body;
    const createdUser = await userServices.create({
      username,
      vocation,
      level,
      password,
    });
    return res.status(201).json(createdUser);
  }
}
