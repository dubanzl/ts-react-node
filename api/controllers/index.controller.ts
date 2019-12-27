import { Request, Response } from 'express'; // eslint-disable-line no-unused-vars
import _ from 'lodash';

class IndexController {
	public async getTasks(req: Request, res: Response) {
			res.json({task:"ok"});
	}
}

export default IndexController;
