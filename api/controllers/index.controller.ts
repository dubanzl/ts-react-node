import { Request, Response } from 'express'; // eslint-disable-line no-unused-vars
import TaskModel from '../models/task.model';

class IndexController {
	public async getTasks(req: Request, res: Response) {
		const task: any = await TaskModel.getTasks();
		res.json(task);
	}
}

export default IndexController;
