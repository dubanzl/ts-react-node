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
		this.router.get('/getTasks', this.IndexController.getTasks);
		this.router.get('/registerTask', this.IndexController.registerTask);

	}
}

export default new IndexRoutes().router;
