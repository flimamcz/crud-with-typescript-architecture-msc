import { ResultSetHeader } from 'mysql2';
import connection from './connection';
import { Iuser } from '../interfaces/User.interface';

export default class User {
  static async create(people: Iuser): Promise<Iuser> {
    const columns = Object.keys(people).join(', ');

    const placeholders = Object.keys(people)
      .map((_key) => '?')
      .join(', ');

    const [{ insertId }] = await connection.execute<ResultSetHeader>(
      `INSERT INTO Trybesmith.users (${columns}) VALUE (${placeholders})`,
      [...Object.values(people)],
    );

    return { id: insertId, ...people };
  }
}
