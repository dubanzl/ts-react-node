import React, { Component } from 'react';
import { Form, Button, Icon } from 'semantic-ui-react';
import { withRouter } from 'react-router-dom';
import '../../stylesheet/auth/login.less';

interface Props {
	history: any;
}

interface State {
}

class Login extends Component<Props, State> {
	constructor(props) {
		super(props);
		this.state = {};
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
						/>

						<Form.Input
							icon
							type="password"
							placeholder="Contraseña"
						>
							<input />
							<Icon className="password-lock-icon" name="lock" />
							<Icon className="display-password" name="eye" />
						</Form.Input>

						<Button color="blue" fluid size="large">
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
