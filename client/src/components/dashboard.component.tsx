import React, { Component } from 'react';
import { Icon, Button, Modal, Header, Form } from 'semantic-ui-react';
import api from '../api';
import '../stylesheet/dashboard.less';

export interface Props {
}

interface State {
	name: string;
	description: string;
	priority: string;
	expiration_date: string;
	expiration_time: string;
	open: boolean;
}

class Dashboard extends Component<Props, State> {

	constructor(props) {
		super(props);
		this.state = {
			name: '',
			description: '',
			priority: '',
			expiration_date: '',
			expiration_time: '',
			open: false,
		};
	}

	async componentDidMount() {
		const tasks = await api.tasksApi.getTasksByUserId('5e06bf2299ec426f3a3ef353');
		console.log(tasks);
	}

	async addTask() {
		this.setState({ open: false });
		const { name, description, priority, expiration_date, expiration_time } = this.state;
		console.log(name, description, priority, expiration_date, expiration_time);
		const response = await api.tasksApi.addTask({ name, description, priority, expiration_date, expiration_time, userId: '5e06bf2299ec426f3a3ef353' });
		console.log(response);
	}

	render() {
		const { open } = this.state;
		return (
			<div className="dashboard">
				<div className="dashboard-box">
					<p className="dashboard-brand">Task Manager <Icon inverted color="blue" name="tasks" circular /></p>
					<div className="dashboard-action-bar">
						<Modal
							trigger={
								<Button onClick={() => this.setState({ open: true })} primary>Añadir tarea</Button>
							}
							open={open}
							centered={false}
						>
							<Header icon="archive" content="Archive Old Messages" />
							<Modal.Content>
								<Form size="large">
									<Form.Input
										label="Nombre"
										fluid
										placeholder="Nombre"
										name="email"
										type="text"
										onChange={(event) => this.setState({ name: event.target.value })}
									/>
									<Form.TextArea
										rows={4}
										placeholder="Descripción"
										label="Descripción"
										onChange={
											(_event, { value }: any) => {
												this.setState({ description: value });
											}
										}
									/>

									<Form.Group widths="equal">
										<Form.Select
											label="Prioridad"
											fluid
											placeholder="Seleccione prioridad"
											onChange={
												(_event, { value }: any) => {
													this.setState({ priority: value });
												}
											}
											options={[
												{ key: 'very high', text: 'Muy alta', value: 'very high' },
												{ key: 'high', text: 'Alta', value: 'high' },
												{ key: 'half', text: 'Media', value: 'half' },
												{ key: 'low', text: 'Baja', value: 'low' },
												{ key: 'very low', text: 'Muy Baja', value: 'very low' },
											]}
										/>
										<Form.Input
											label="Fecha de vencimiento"
											fluid
											type="datetime-local"
											onChange={(event) => this.setState({ expiration_time: event.target.value })}
										/>
									</Form.Group>
								</Form>
							</Modal.Content>
							<Modal.Actions>
								<Button color="red" onClick={() => this.setState({ open: false })}>
									<Icon name="remove" /> Cancelar
								</Button>
								<Button color="green" onClick={() => this.addTask()}>
									<Icon name="checkmark" /> Aceptar
								</Button>
							</Modal.Actions>
						</Modal>
					</div>
					<div className="dashboard-header">
						<p>Mis tareas</p>
					</div>
					<div className="dashboard-content">
						<p>
							Lorem ipsum dolor sit amet consectetur adipisicing elit.
							Libero eum eaque unde nostrum ipsum eligendi,
							inventore nemo ad veritatis nisi error quos.
							A obcaecati iusto odio recusandae aspernatur minus consectetur!
						</p>
					</div>
				</div>
			</div>
		);
	}
}


export default Dashboard;
