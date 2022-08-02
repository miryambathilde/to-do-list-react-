import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { Contact } from '../../models/contact.class';
//import { Contact } from '../../../models/contact.class';
import ContactForm from "../pure/forms/contactForm";
import ContactList1 from "./contactList";


const ContactComponent = () => {

	const initialContacts = [
		new Contact(1, 'Juan', 'Perez', 'juanpe@gmail.com', true),
		new Contact(2, 'Miguel', 'Perez', 'elmigue@gmail.com', false),
		new Contact(3, 'Carolina', 'Perez', 'lacarol@gmail.com', true),
	];

	const [ contacts, setContacts ] = useState(initialContacts);
	const [ id, setId ] = useState(null);

	const removeContact = (id) => {
		const confirmation = window.confirm(`Are you sure you want to remove this contact ${ id }?`);
		if (confirmation) setContacts((contact) => contact.filter(contact => contact.id !== id));
	};

	const getContact = (id) => {
		const getContact = contacts.filter(contact => contact.id === id);
		setId(getContact);
	};

	const editContact = (contact) => {
		const newContacts = contacts.map(contact => contact.id === contact.id ? new Contact(contact.name, contact.email, contact.id, contact.status) : contact);
		console.log(newContacts);
		setContacts(newContacts);
		setId(null);
	};

	const statusContact = (id) => {
		setContacts((contact) => contact.map(c => contact.id === id ? { ...contact, status: !contact.status } : contact));
	};

	const addContact = (newContact) => {
		setContacts([
			...contacts,
			{
				...newContact,
				id: Math.random() * 100,
			}
		]);
	};

	return (
		<div>
			<h1>Contacts</h1>
			<ContactList1
				contacts={ contacts }
				removeContact={ removeContact }
				getContact={ getContact }
				statusContact={ statusContact }
			/>
			<ContactForm
				addContact={ addContact }
				editContact={ editContact }
				id={ id }
			/>
		</div>
	);
};


ContactComponent.propTypes = {

};


export default ContactComponent;
