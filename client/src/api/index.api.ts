import request from '../utils/request.util';


export async function getTasks(): Promise<number[]> {
	return request({
		url: 'index/getTasks',
		method: 'GET',
	});
}
