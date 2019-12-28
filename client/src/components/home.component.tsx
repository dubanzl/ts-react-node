import React, { Component } from 'react';
import '../stylesheet/home.less';

export interface Props {
}

interface State {
}

class Home extends Component<Props, State> {

	constructor(props) {
		super(props);
		this.state = {
		};
	}

	render() {
		return (
			<div>
				<p>Home Route</p>
			</div>
		);
	}
}


export default Home;
