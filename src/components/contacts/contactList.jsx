import React, { useState } from 'react';
import { Contact } from '../../models/contact.class';
import ContactForm from "../pure/forms/contactForm";
import { ContactComponent } from "../../components/contacts/contact";

// contactTable
const ContactList1 = ({ contacts, removeContact, getContact, statusContact }) => {

	return (
		<table class="container-md table table-striped">
			<thead>
				<tr>
					<th scope="col">#</th>
					<th scope="col">First</th>
					<th scope="col">Last</th>
					<th scope="col">Email</th>
					<th scope="col">Status</th>
					<th scope="col">Actions</th>
				</tr>
			</thead>
			<tbody>
				{ contacts.map((contact) => {
					return (
						<tr key={ contact.id }>
							<th style={ { width: "80px" } }>{ contact.id }</th>
							<td>{ contact.name }</td>
							<td>{ contact.lastName }</td>
							<td>{ contact.email }</td>
							<td style={ { width: "150px" } }>{ contact.status ? 'Connected' : 'Disconnected' }</td>
							<td>
								<button type="button" className={ `btn me-2 ${ !contact.status ? 'btn-success' : 'btn-secondary' }` } onClick={ () => statusContact(contact.id) } style={ { width: "120px" } }>
									{ !contact.status ? 'Login' : 'Logout' }
								</button>
								<button type="button" className="btn btn-info me-2" onClick={ () => getContact(contact.id) }>
									Edit
								</button>
								<button type="button" className="btn btn-danger" onClick={ () => removeContact(contact.id) }>
									Delete
								</button>
							</td>
						</tr>
					);
				}) }
			</tbody>
		</table>
	);
};

export default ContactList1;
