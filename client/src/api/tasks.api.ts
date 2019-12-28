import request from '../utils/request.util';

export async function addTask(task): Promise<any> {
	return request({
		url: 'index/registerTask',
		method: 'POST',
		body: { task },
	});
}

export async function getTasksByUserId(userId): Promise<any> {
	return request({
		url: `index/getTasks/${userId}`,
		method: 'GET',
	});
}
