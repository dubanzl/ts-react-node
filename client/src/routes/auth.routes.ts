import Login from '../components/auth/login.component';

export const authRoutes : any = [
	{
		path: '/iniciar-sesion',
		exact: true,
		component: Login,
	},
];
