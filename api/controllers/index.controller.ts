import { Request, Response } from 'express';
import TaskModel from '../models/task.model';
import _ from 'lodash';

class IndexController {
	public async getTasks(req: Request, res: Response) {
			const task: any = await TaskModel.getTasks();
			res.json(task);
	}
}

export default IndexController;
