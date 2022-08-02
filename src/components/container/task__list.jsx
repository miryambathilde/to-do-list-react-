import React, { useState, useEffect } from 'react';
import { LEVELS } from '../../models/levels.enum';
import { Task } from '../../models/task.class';
import TaskComponent from '../pure/task';
import TaskForm from "../pure/forms/taskForm";

// Importamos la hoja de estilos de task.scss
import '../../styles/task.scss';

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


	/* UPDATE STATUS TASK */
	function completeTask (task) {
		console.log('Complete this task: ', task);
		const index = tasks.indexOf(task);
		const tempTasks = [ ...tasks ];
		// We update the state of the component with the new list of tasks and it will update the
		// iteration of the tasks to show the new state that return the task updated
		tempTasks[ index ].completed = !tempTasks[ index ].completed;
		setTasks(tempTasks);
	}

	/* DELETE-REMOVE TASK */
	function removeTask (task) {
		console.log('Deleting this task: ', task);
		const index = tasks.indexOf(task);
		const tempTasks = [ ...tasks ];
		tempTasks.splice(index, 1);
		setTasks(tempTasks);
	}

	/* ADD NEW TASK */
	function addTask (task) {
		console.log('Adding this task: ', task);
		const index = tasks.indexOf(task);
		const tempTasks = [ ...tasks ];
		tempTasks.push(task);
		setTasks(tempTasks);
	}


	return (
		<div>
			<div className="col-12">
				<div className="card">
					{/* card header */ }
					<div className="card-header p-3">
						<h5>
							Your task list:
						</h5>
					</div>
					{/* card body (content) */ }
					<div className="card-body" data-mdb-perfect-scrollbar="true" style={ { position: 'relative', hight: '400px' } }>
						<table>
							<thead>
								<tr>
									<th scope="col">Title</th>
									<th scope="col">Decription</th>
									<th scope="col">Priority</th>
									<th scope="col">Actions</th>
								</tr>
							</thead>
							<tbody>
								{/* map para mapear la lista de tareas y le pasamos como key el index*/ }
								{ tasks.map((task, index) => {
									return (
										<TaskComponent
											key={ index }
											task={ task }
											complete={ completeTask }
											remove={ removeTask }
										>
										</TaskComponent>
									);
								}
								) }
							</tbody>
						</table>
					</div>
				</div>
			</div>
			<TaskForm add={ addTask }></TaskForm>
		</div>
	);
};


export default TaskListComponent;
