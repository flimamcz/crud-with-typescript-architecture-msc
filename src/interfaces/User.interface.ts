export interface Iuser {
  id?: number,
  username: string,
  vocation?: string,
  level: number,
  password: string
}

export interface IuserLogin {
  username: string,
  password: string,
}