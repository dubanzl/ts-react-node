import React, { Component } from 'react';
import { Form, Button, Icon } from 'semantic-ui-react';
import { withRouter } from 'react-router-dom';
import api from '../../api';
import '../../stylesheet/auth/login.less';

interface Props {
	history: any;
}

interface State {
	email: string;
	password: string;
}

class Login extends Component<Props, State> {
	constructor(props) {
		super(props);
		this.state = {
			email: '',
			password: '',
		};
	}


	async login() {
		const { email, password } = this.state;
		console.log(email, password);
		const login = await api.authApi.login({ email, password });
		console.log(login);


	}

	render(): JSX.Element {
		const { history } = this.props;

		return (
			<div className="login">
				<p className="login-brand">Task Manager <Icon inverted color="blue" name="tasks" circular /></p>
				<div className="login-box">
					<Form size="large">
						<Form.Input
							fluid
							icon="mail"
							iconPosition="left"
							placeholder="Correo Electronico"
							name="email"
							type="text"
							onChange={(event) => this.setState({ email: event.target.value })}
						/>

						<Form.Input
							icon
							type="password"
							placeholder="Contraseña"
							onChange={(event) => this.setState({ password: event.target.value })}
						>
							<input />
							<Icon className="password-lock-icon" name="lock" />
							<Icon className="display-password" name="eye" />
						</Form.Input>

						<Button color="blue" fluid size="large" onClick={() => this.login()}>
							INCIAR SESIÓN
						</Button>
						<label className="link" onClick={() => { history.push('/registro'); }}> ¿No tienes cuenta? registrate aquí </label>
						<Button color="black" fluid size="large" onClick={() => { history.push('/registro'); }}>
							REGISTRARSE
						</Button>
					</Form>
				</div>
			</div>
		);
	}
}


export default withRouter((Login) as any);
