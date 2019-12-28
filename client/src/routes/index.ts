import { matchRoutes } from './match.routes';
import { authRoutes } from './auth.routes';
import Home from '../components/home.component';

const homeRoute: any = 	{
	path: '/(inicio||)',
	exact: true,
	component: Home,
};


const routes: any = [].concat(
	authRoutes,
	homeRoute,
	matchRoutes,
);

export default routes;
