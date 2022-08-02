import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import { Task } from '../../models/task.class';
import { LEVELS } from '../../models/levels.enum';
import { BsToggleOn, BsToggleOff } from 'react-icons/bs';
import { FaTrash } from 'react-icons/fa';

// Importamos la hoja de estilos de task.scss
import '../../styles/task.scss';

const TaskComponent = ({ task, complete, remove }) => {

	useEffect(() => {
		console.log('Task Created');
		return () => {
			console.log(`Task: ${ task.name } is going to unmount`);
		};
	}, [ task ]);

	/**
	 * Function that returns a Badge
	 * dependeing on the level of the task
	 */

	function taskLevelBadge () {
		switch (task.level) {
			case LEVELS.NORMAL:
				return (
					<h6 className="mb-0">
						<span className="badge bg-primary">
							{ task.level }
						</span>
					</h6>
				);
			case LEVELS.URGENT:
				return (
					<h6 className="mb-0">
						<span className="badge bg-warning text-dark">
							{ task.level }
						</span>
					</h6>
				);
			case LEVELS.BLOCKING:
				return (
					<h6 className="mb-0">
						<span className="badge bg-danger">
							{ task.level }
						</span>
					</h6>
				);
			default:
				break;
		}
	}

	// Function that returns a icon depending on the status of the task
	function taskCompletedIcon () {
		if (task.completed) {
			return (<i onClick={ () => complete(task) } className="task-action" style={ { color: 'green', fontSize: '18px' } }><BsToggleOn /></i>);
		} else {
			return (<i onClick={ () => complete(task) } className="task-action" style={ { color: 'gray', fontSize: '18px' } }><BsToggleOff /></i>);
		}
	}

	return (
		<tr className="fw-normal" >
			<th>
				<span className="ms-2">{ task.name }</span>
			</th>
			<td className="align-middle">
				<span>{ task.description }</span>
			</td>
			<td className="align-middle">
				{/* Execution of function to return badge element */ }
				<span>{ taskLevelBadge() }</span>
			</td>
			<td className="align-middle">
				{/* Execution of function to return an icon depending on completation of the task */ }
				{ taskCompletedIcon() }
				<i onClick={ () => remove(task) } className="task-action" style={ { color: '#C02706' } }><FaTrash /></i>
			</td>
		</tr >
	);
};


TaskComponent.propTypes = {
	task: PropTypes.instanceOf(Task).isRequired,
	complete: PropTypes.func.isRequired,
	remove: PropTypes.func.isRequired
};


export default TaskComponent;

