import { CustomValidator, check } from 'express-validator'
import { Customer } from '../models'

const isUniqueNif: CustomValidator = async (value: string) => {
  const customer = await Customer.findOne({ where: { nif: value } })
  if (customer != null) {
    throw new Error('NIF already in use')
  }
}

const customerExist: CustomValidator = async (value: string) => {
  const customer = await Customer.findByPk(value)
  if (customer === null) {
    throw new Error(`Customer with id: ${value} not found`)
  }
}

export const validateNewCustomer = [
  check('nif')
    .trim()
    .escape()
    .not()
    .isEmpty()
    .isString()
    .custom(isUniqueNif),
  // .matches()
  check('name')
    .trim()
    .escape()
    .not()
    .isEmpty()
    .isString()
    .isAlpha(),
  check('firstname')
    .trim()
    .escape()
    .not()
    .isEmpty()
    .isString()
    .isAlpha(),
  check('lastname')
    .trim()
    .escape()
    .not()
    .isEmpty()
    .isString()
    .isAlpha(),
  check('email')
    .trim()
    .escape()
    .not()
    .isEmpty()
    .isString()
    .normalizeEmail()
    .isEmail(),
  check('telephone')
    .trim()
    .escape()
    .not()
    .isEmpty()
    .isNumeric()
    .isLength({ min: 9, max: 9 }),
  check('mobilphone')
    .trim()
    .escape()
    .not()
    .isEmpty()
    .isNumeric()
    .isLength({ min: 9, max: 9 })
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
