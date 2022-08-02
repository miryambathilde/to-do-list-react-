import React from 'react';
import StatusUser from "../pure/statusUser";
import { Contact } from './../../models/contact.class';

const ContactList = () => {

	// DEFINIMOS LOS VALORES DE LA CONTACTO POR DEFECTO
	const defaultContact = new Contact('Miryam', 'Bathilde', 'react@gmail.com', false);

	return (
		<div>
			<h1>
				Datos del contacto:
			</h1>
			<h3>
				<StatusUser contact={ defaultContact }></StatusUser>
			</h3>
		</div>
	);
};

export default ContactList;
