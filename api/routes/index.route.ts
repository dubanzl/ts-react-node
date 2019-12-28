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
		this.router.get('/getTasks/:userId', this.IndexController.getTasks);
		this.router.post('/registerTask', this.IndexController.registerTask);
		this.router.post('/updateTask', this.IndexController.updateTask);
		this.router.post('/removeTask', this.IndexController.removeTask);
	}
}

export default new IndexRoutes().router;
