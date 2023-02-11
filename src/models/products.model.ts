import { ResultSetHeader } from 'mysql2';
import { Iproduct, IproductCreated } from '../interfaces/Product.interface';
import connection from './connection';

export default class Product {
  static async insert(product: Iproduct): Promise<IproductCreated> {
    const columns = Object.keys(product).join(', ');

    const placeholders = Object.keys(product)
      .map((_key) => '?')
      .join(', ');

    const [{ insertId }] = await connection.execute<ResultSetHeader>(
      `INSERT INTO Trybesmith.products (${columns}) VALUE (${placeholders})`,
      [...Object.values(product)],
    );

    return { id: insertId, ...product };
  }
}
