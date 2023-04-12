import { NextFunction, Request, Response } from 'express'
import { validate as isValidUUID } from 'uuid'

export const wrapAsync = (fn: Function) => (req: Request, res: Response, next: NextFunction) => fn(req, res, next).catch(next)

export const isValidId = (id: string): void => {
  if (isValidUUID(id) === false) {
    // throw new Api400Error('Invalid ObjectID')
    throw new Error('Invalid ObjectID')
  }
}
