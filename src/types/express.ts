export interface Request {
  body: any;
  query: any;
  params: any;
}
export interface Response {
  status: any;
  send:any;
}

export type NextFunction = (err?: any) => any;