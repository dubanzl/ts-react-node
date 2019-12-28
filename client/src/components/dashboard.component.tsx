import React, { Component } from 'react';
import { Icon, Button, Modal, Header, Form, Label, Dropdown } from 'semantic-ui-react';
import _ from 'lodash';
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
	tasks: {
		_id: string;
		name: string;
		priority: string;
		description: string;
		expirationDate: string;
		userId: string;
	}[];
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
			tasks: [],
		};
	}

	async componentDidMount() {
		const tasks = await api.tasksApi.getTasksByUserId('5e06bf2299ec426f3a3ef353');
		console.log(tasks);
		this.setState({ tasks });
	}

	async addTask() {
		const { tasks } = this.state;
		this.setState({ open: false });
		const { name, description, priority, expiration_date, expiration_time } = this.state;
		console.log(name, description, priority, expiration_date, expiration_time);
		const response = await api.tasksApi.addTask({ name, description, priority, expiration_date, expiration_time, userId: '5e06bf2299ec426f3a3ef353' });
		console.log(response);
		tasks.push(response);
		this.setState({ tasks });
	}

	render() {
		const { open, tasks } = this.state;
		const colors = ['blue', 'red', 'black', 'brown', 'green', 'grey', 'olive', 'orange', 'pink', 'purple', 'teal', 'violet', 'yellow'];

		const options = [
			{ key: 'user', text: 'Account', icon: 'user' },
			{ key: 'settings', text: 'Settings', icon: 'settings' },
			{ key: 'sign-out', text: 'Sign Out', icon: 'sign out' },
		];

		let background = '#88858517';


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
												{ key: 'Muy alta', text: 'Muy alta', value: 'Muy alta' },
												{ key: 'Alta', text: 'Alta', value: 'Alta' },
												{ key: 'Media', text: 'Media', value: 'Media' },
												{ key: 'Baja', text: 'Baja', value: 'Baja' },
												{ key: 'Muy Baja', text: 'Muy Baja', value: 'Muy Baja' },
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
						<p className="task-title">Mis tareas</p>
						<p className="task-counters-info"><b>Tareas completadas:</b> 17</p>
						<p className="task-counters-info"><b>Tareas pendientes:</b> 2</p>
					</div>
					<div className="dashboard-content">
						{
							tasks.map((task) => {

								if (background === '#88858517') {
									background = 'white';
								} else {
									background = '#88858517';
								}

								return (
									<div style={{ backgroundColor: background }} className="task" key={task._id}>
										<div>
											<Dropdown
												className="task-action-bar"
												trigger={<Icon name="ellipsis vertical" size="large" color="grey" inverted />}
												options={options}
												pointing="top right"
												icon={null}
											/>
											<div className="task-header">
												<Icon name="circle" size="tiny" color={_.sample(colors) as any} inverted />
												<p><b>{ task.name }: </b> { task.description }</p>
											</div>
											<div className="task-content">
												<div className="tasks-tags">
													<Label color="green">
														Compleada
													</Label>
													<Label color="red">
														Vencida
													</Label>
													<Label color="grey">
														Pendiente
													</Label>
													<Label color="red">
														Prioridad { task.priority }
													</Label>
												</div>
												<p className="task-date">Fecha de vencimiento: { task.expirationDate } </p>

											</div>
										</div>
									</div>
								);
							})
						}
					</div>
				</div>
			</div>
		);
	}
}


export default Dashboard;
