import { Request, Response } from 'express'; // eslint-disable-line no-unused-vars
import TaskModel from '../models/task.model';

class IndexController {
	public async getTasks(req: Request, res: Response) {
		const task: any = await TaskModel.getTasks();
		res.json(task);
	}

	public async registerTask(req: Request, res: Response) {
		const { task } = req.body;

		const data = {
			name: task.name,
			priority: task.name,
			Expirationdate: new Date(task.Expirationdate),
		};
		const result = await TaskModel.registerTask(data);
		res.json(result);
	}
}

export default IndexController;
