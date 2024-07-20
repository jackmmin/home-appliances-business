import express from 'express';
import { HomeController } from './controllers/homeController';

const router = express.Router();
const homeController = new HomeController();

router.get('/', (req, res) => homeController.index(req, res));

export default router;
