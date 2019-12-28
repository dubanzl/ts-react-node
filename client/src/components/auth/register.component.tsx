import React, { Component } from 'react';
import { Form, Button, Icon } from 'semantic-ui-react';
import { withRouter } from 'react-router-dom';
import '../../stylesheet/auth/register.less';

interface Props {
	history: any;
}

interface State {
}

class Register extends Component<Props, State> {
	constructor(props) {
		super(props);
		this.state = {};
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

						<Form.Input
							icon
							type="password"
							placeholder="Confirmar Contraseña"
						>
							<input />
							<Icon className="password-lock-icon" name="lock" />
							<Icon className="display-password" name="eye" />
						</Form.Input>

						<Button color="blue" fluid size="large">
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
