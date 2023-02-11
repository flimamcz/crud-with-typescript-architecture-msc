export interface Iproduct {
  name: string,
  amount: string
} 

export interface IproductCreated extends Iproduct{
  id: number,
}