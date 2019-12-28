import request from '../utils/request.util';


export async function register(user: { email: string, password: string }): Promise<any> {
	return request({
		url: 'auth/register',
		method: 'POST',
		body: { user },
	});
}


export async function login(user: { email: string, password: string }): Promise<any> {
	return request({
		url: 'auth/login',
		method: 'POST',
		body: { ...user },
	});
}
