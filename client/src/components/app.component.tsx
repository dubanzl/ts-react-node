import React, { Component } from 'react';
import { getTasks } from '../api/index.api';

class App extends Component<{}, {}> {

	constructor(props) {
		super(props);
		this.state = {}
	}

	render() {
		return (
			<div>
					<h1>Hello Word!</h1>
			</div>
		);
	}
}

export default App;
