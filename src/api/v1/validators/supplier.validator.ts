import { CustomValidator, check } from 'express-validator'
import { Supplier } from '../models'

const customerExist: CustomValidator = async (value: string) => {
  const supplier = await Supplier.findByPk(value)
  if (supplier === null) {
    throw new Error(`Supplier with id: ${value} not found`)
  }
}

export const validateNewSupplier = [
  check('name')
    .trim()
    .escape()
    .not()
    .isEmpty()
    .isString()
    .isAlpha()
]

export const validateId = [
  check('id')
    .trim()
    .escape()
    .not()
    .isEmpty()
    .isUUID()
    .bail()
    .custom(customerExist)
]
