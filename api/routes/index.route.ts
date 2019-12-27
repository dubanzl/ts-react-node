import { Router } from 'express';
import IndexController from '../controllers/index.controller';

class IndexRoutes {
	public router: Router = Router();
	public IndexController: IndexController;

	constructor() {
		this.IndexController = new IndexController();
		this.config();
	}

	config(): void{
		this.router.post('/getTasks', this.IndexController.getTasks);
	}
}

export default new IndexRoutes().router;
