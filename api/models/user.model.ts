import db from '../database/db.conn';

class UserModel {
	public static async findUserByEmail(email: string) {
		try {
			return await db.then((conn) => conn.collection('users').find({ email }).toArray());
		} catch (err) {
			throw err;
		}
	}
}

export default UserModel;
