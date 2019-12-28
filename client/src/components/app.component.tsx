import React, { Component } from 'react';
import { getTasks } from '../api/index.api';
import { Route, Switch } from 'react-router-dom';
import routes from '../routes';

class App extends Component<{}, {}> {

	constructor(props) {
		super(props);
		this.state = {};
	}

	render() {
		return (
			<div>
				<Switch>
					{
						routes.map((
							route: {path: string; exact: boolean; component: any, routes: any[]},
						): JSX.Element => {
							return (
								<Route
									key={route.path}
									path={route.path}
									render={(props: any) => {
										return <route.component {...props} routes={route.routes} />;
									}}
								/>
							);
						})
					}
				</Switch>
			</div>
		);
	}
}

export default App;
