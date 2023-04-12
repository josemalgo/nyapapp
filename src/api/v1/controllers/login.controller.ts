import { NextFunction, Request, Response } from 'express'
import LoginService from '../services/login.service'

class LoginController {
  private readonly loginService: LoginService

  constructor () {
    this.loginService = new LoginService()
  }

  public async validateUser (req: Request, res: Response, _next: NextFunction): Promise<void> {
    // validateRequest
    const { name, password } = req.body
    const token = await this.loginService.loginUser(name, password)
    res.status(200).json({ token })
  }
}

export default LoginController
