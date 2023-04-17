import { NextFunction, Request, Response } from 'express'
import { validationResult } from 'express-validator'
import { validate as isValidUUID } from 'uuid'

export const wrapAsync = (fn: Function) => (req: Request, res: Response, next: NextFunction) => fn(req, res, next).catch(next)

export const isValidId = (id: string): void => {
  if (!isValidUUID(id)) {
    // throw new Api400Error('Invalid ObjectID')
    throw new Error('Invalid ObjectID')
  }
}

export const validateRequest = (req: Request): void => {
  const errors = validationResult(req)
  if (!errors.isEmpty()) {
    // throw new Api400Error(errors.array())
    throw new Error('Request invalid')
  }
}
