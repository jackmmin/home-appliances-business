import { Request, Response } from 'express';
import { HomeModel } from '../models/homeModel';

export class HomeController {
  private homeModel: HomeModel;

  constructor() {
    this.homeModel = new HomeModel();
  }

  public index(req: Request, res: Response): void {
    const message = this.homeModel.getMessage();
    res.render('home', { message });
  }
}
