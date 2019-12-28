import { Router } from 'express';
import AuthController from '../controllers/auth.controller';

class AuthRoutes {
	public router: Router = Router();
	public AuthController: AuthController;

	constructor() {
		this.AuthController = new AuthController();
		this.config();
	}

	config(): void{
		this.router.post('/login', this.AuthController.login);
	}
}

export default new AuthRoutes().router;
