import connection from './connection';
import Iorder from '../interfaces/Order.interface';

export default class Orders {
  static async getAll(): Promise<Iorder[]> {
    const querySQL = `
      SELECT 
      pr.order_id as "id", 
      ord.user_id as "userId", 
      JSON_ARRAYAGG(pr.id) as 
      "productsIds"
      FROM Trybesmith.products as pr 
      INNER JOIN Trybesmith.orders as ord ON ord.id = pr.order_id
      GROUP BY pr.order_id;`;
    const [orders] = await connection.execute(querySQL);
    return orders as Iorder[];
  }
}