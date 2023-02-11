import jwt, { Secret } from 'jsonwebtoken';
import { Iuser } from '../interfaces/User.interface';

const generateToken = (object: Iuser) => {
  const token = jwt.sign(object, process.env.JWT_SECRET as Secret, {
    algorithm: 'HS256',
  });

  return token;
};

const authToken = (token: string) => {
  try {
    const verified = jwt.verify(token, process.env.JWT_SECRET as Secret);
    return verified;
  } catch (error) {
    return { type: 'AUTH_FAILED', message: 'Expired or invalid token' };
  }
};

export default {
  generateToken,
  authToken,
};
