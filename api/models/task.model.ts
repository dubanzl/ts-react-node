import db from '../database/db.conn';

class TaskModel {
	public static async getTasks() {
		try {
			return await db.then((conn) => conn.collection('tasks').find({}).toArray());
		} catch (err) {
			throw err;
		}
	}
}

export default TaskModel;
