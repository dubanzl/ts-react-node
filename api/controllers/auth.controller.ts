import { Request, Response } from 'express'; // eslint-disable-line no-unused-vars
import jwt from 'jsonwebtoken';
import config from 'config';
import { md5 } from '../utils/hash.util';
import UserModel from '../models/user.model';

class AuthController {
	public async login(req: Request, res: Response): Promise<void> {
		try {
			const user: any = await UserModel.findUserByEmail(req.body.email);
			if (user[0].password === md5(req.body.password)) {
				const token = jwt.sign({
					id: user[0]._id,
					name: user[0].name,
					role: user[0].role,
				}, config.get('jwt'));
				res.json({ token });
			} else {
				res.status(403).json({ message: { type: 'credentials', payload: 'Crendeciales invalidas', descripcion: 'El usuario y la contraseña no coinciden', color: 'red' } });
			}
		} catch (err) {
			throw err;
		}
	}
}

export default AuthController;
