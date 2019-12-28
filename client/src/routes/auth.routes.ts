import Login from '../components/auth/login.component';
import Register from '../components/auth/register.component';

export const authRoutes : any = [
	{
		path: '/iniciar-sesion',
		exact: true,
		component: Login,
	},
	{
		path: '/registro',
		exact: true,
		component: Register,
	},
];
