import React, { Component } from 'react';
import { Form, Button, Icon } from 'semantic-ui-react';
import { withRouter } from 'react-router-dom';
import '../../stylesheet/auth/register.less';
import api from '../../api';

interface Props {
	history: any;
}

interface State {
	email: string,
	password: string,
	confirmPassword: string,
}

class Register extends Component<Props, State> {
	constructor(props) {
		super(props);
		this.state = {
			email: '',
			password: '',
			confirmPassword: '',
		};
	}

	async register() {
		const { email, password, confirmPassword } = this.state;
		console.log(email, password, confirmPassword);

		const register = await api.authApi.register({ email, password });
		console.log('register', register);

	}

	render(): JSX.Element {
		const { history } = this.props;

		return (
			<div className="register">
				<p className="register-brand">Task Manager <Icon inverted color="blue" name="tasks" circular /></p>
				<div className="register-box">
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

						<Form.Input
							icon
							type="password"
							placeholder="Confirmar Contraseña"
							onChange={(event) => this.setState({ confirmPassword: event.target.value })}
						>
							<input />
							<Icon className="password-lock-icon" name="lock" />
							<Icon className="display-password" name="eye" />
						</Form.Input>

						<Button color="blue" fluid size="large" onClick={() => this.register()}>
							REGISTRARSE
						</Button>
						<label className="link" onClick={() => { history.push('/iniciar-sesion'); }}> ¿Ya tienes cuenta? inicia sesión aquí</label>
					</Form>
				</div>
			</div>
		);
	}
}


export default withRouter((Register) as any);
