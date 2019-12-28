import request from '../utils/request.util';

export async function addTask(task): Promise<any> {
	return request({
		url: 'index/registerTask',
		method: 'POST',
		body: { task },
	});
}
