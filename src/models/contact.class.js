/* eslint-disable no-undef */
export class Contact {
	id = '';
	name = '';
	lastName = '';
	email = '';
	status = false;

	constructor (id, name, lastName, email, status) {
		this.id = id;
		this.name = name;
		this.lastName = lastName;
		this.email = email;
		this.status = status;
	}
}