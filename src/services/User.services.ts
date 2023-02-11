import { Iuser } from '../interfaces/User.interface';

import { userModel } from '../models';

export default class UserServices {
  static async create(user: Iuser): Promise<Iuser> {
    const createdPeople = await userModel.create(user);
    return createdPeople;
  }
}
