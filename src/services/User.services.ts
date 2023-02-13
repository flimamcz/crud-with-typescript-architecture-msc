import { Iuser } from '../interfaces/User.interface';

import { userModel } from '../models';

// interface ReturnMessage {
//   type: string,
//   message: string
// }

export default class UserServices {
  static async create(user: Iuser): Promise<Iuser> {
    const createdPeople = await userModel.create(user);
    return createdPeople;
  }

  static async login(user: Iuser): Promise<Iuser[]> {
    // const sucess = { type: 'SUCESS', message: 'User Exist' };
    // const failed = { type: 'NOT_FOUND', message: 'User not found' };
    const result = await userModel.findUserForLogin(user);
    
    return result as Iuser[];
  }
}
