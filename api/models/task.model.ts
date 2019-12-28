import db from '../database/db.conn';

class TaskModel {
	public static async getTasks() {
		try {
			return await db.then((conn) => conn.collection('tasks').find({}).toArray());
		} catch (err) {
			throw err;
		}
	}

	public static async registerTask(task: {name: string, priority: string, Expirationdate: Date}) {
		try {
			return new Promise((resolve : Function) => {
				db.then((conn) => conn.collection('tasks').insertOne(task, (err, doc): void => {
					if (err) {
						throw err;
					}
					resolve(doc.ops[0]);
				}));
			});
		} catch (error) {
			throw error;
		}
	}
}

export default TaskModel;
