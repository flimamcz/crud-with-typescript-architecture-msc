import { Request, Response } from 'express';
import { userServices } from '../services';
import auth from '../utils/generateToken';

export default class UserController {
  static async create(req: Request, res: Response): Promise<Response> {
    const user = req.body;
    const createdUser = await userServices.create(user);
    if (!createdUser) res.status(401).json({ message: 'Not authorized' });
    const token = auth.generateToken(user);
    return res.status(201).json({ token });
  }

  static async login(req: Request, res: Response): Promise<Response> {
    const user = req.body;
    const existUser = await userServices.login(user);
    
    if (!existUser.length) return res.status(401).json({ message: 'Username or password invalid' });
    const token = auth.generateToken(user);
    return res.status(200).json({ token });
  }
}
