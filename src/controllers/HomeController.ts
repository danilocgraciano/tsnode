import { Request, Response } from 'express'

class HomeController {
  public index (req: Request, res: Response): Response {
    return res.send('Home Controller')
  }
}

export default new HomeController()
