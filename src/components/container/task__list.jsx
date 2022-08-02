import React, { useState, useEffect } from 'react';
import { LEVELS } from '../../models/levels.enum';
import { Task } from '../../models/task.class';
import TaskComponent from '../pure/task';

// Importamos la hoja de estilos de task.scss
import '../../styles/task.scss';
import TaskForm from "../pure/forms/taskForm";

const TaskListComponent = () => {

	const defaultTask1 = new Task('Example1', 'Description1', true, LEVELS.NORMAL);
	const defaultTask2 = new Task('Example2', 'Description2', false, LEVELS.URGENT);
	const defaultTask3 = new Task('Example3', 'Description3', false, LEVELS.BLOCKING);

	// Estado del componente
	const [ tasks, setTasks ] = useState([ defaultTask1, defaultTask2, defaultTask3 ]);
	const [ loading, setLoading ] = useState(true);

	// Control del ciclo de vida del componente
	useEffect(() => {
		console.log('Task State has been modified');
		setLoading(false);
		return () => {
			console.log('TaskList component is going to unmount...');
		};
	}, [ tasks ]);


	const changeCompleted = (id) => {
		console.log('TODO: Cambiar estado de una tarea');
	};

	return (
		<div>
			<div className="col-12">
				<div className="card">
					{/* card header */ }
					<div className="card-header p-3">
						<h5>
							Tu lista de tareas:
						</h5>
					</div>
					{/* card body (content) */ }
					<div className="card-body" data-mdb-perfect-scrollbar="true" style={ { position: 'relative', hight: '400px' } }>
						<table>
							<thead>
								<tr>
									<th scope="col">Título</th>
									<th scope="col">Descripción</th>
									<th scope="col">Prioridad</th>
									<th scope="col">Acciones</th>
								</tr>
							</thead>
							<tbody>
								{/* map para mapear la lista de tareas y le pasamos como key el index*/ }
								{ tasks.map((task, index) => {
									return (
										<TaskComponent
											key={ index }
											task={ task }>
										</TaskComponent>
									);
								}
								) }
							</tbody>
						</table>
					</div>
					<TaskForm></TaskForm>
				</div>
			</div>
			{/* TODO: Aplicar un For/Map para renderizar una lista */ }
			{/* <TaskComponent task={ defaultTask }></TaskComponent> */ }
		</div>
	);
};


export default TaskListComponent;
