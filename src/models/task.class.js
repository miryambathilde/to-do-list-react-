// nombre, descripcion, estado (0=pendiente, 1=en progreso, 2=terminado), nivel

import { LEVELS } from "./levels.enum";

// valores por defecto que va a tener una tarea al crearla
export class Task {
	name = '';
	description = '';
	completed = false;
	level = LEVELS.NORMAL;

	constructor (name, description, completed, level) {
		this.name = name;
		this.description = description;
		this.completed = completed;
		this.level = level;
	}
}