import React, { useRef, useEffect } from 'react';
import PropTypes from 'prop-types';
import { Contact } from "../../../models/contact.class";


const ContactForm = ({ addContact, id, editContact }) => {

	const inputName = useRef(null);
	const inputLastName = useRef(null);
	const inputEmail = useRef(null);

	useEffect(() => {

		if (id) {
			inputName.current.value = id[ 0 ].name;
			inputLastName.current.value = id[ 0 ].lastName;
			inputEmail.current.value = id[ 0 ].email;
		}

	}, [ id ]);


	const handleSubmit = (e) => {

		let name = e.target.InputName.value.trim();
		let lastName = e.target.InputLastName.value.trim();
		let email = e.target.InputEmail.value.trim();


		if (name !== "" && email !== "") {

			if (id) {
				editContact({ ...id[ 0 ], name, lastName, email });
			} else {
				addContact(new Contact(name, lastName, email));
			}

			e.target.InputName.value = "";
			e.target.InputLastName.value = "";
			e.target.InputEmail.value = "";
		}

		e.preventDefault();

	};


	return <form className="container" onSubmit={ handleSubmit }>
		<div className="mb-3">
			<label htmlFor="InputName" className="form-label">Name</label>
			<input type="text" className="form-control" id="InputName" autoComplete="off" ref={ inputName } />
		</div>
		<div className="mb-3">
			<label htmlFor="InputLastName" className="form-label">Last</label>
			<input type="text" className="form-control" id="InputLastName" autoComplete="off" ref={ inputLastName } />
		</div>
		<div className="mb-3">
			<label htmlFor="InputEmail" className="form-label">Email</label>
			<input type="email" className="form-control" id="InputEmail" autoComplete="off" ref={ inputEmail } />
		</div>
		<button type="submit" className="btn btn-primary">{ id ? 'Edit' : "Create" }</button>
	</form>;

};


ContactForm.propTypes = {
	addContact: PropTypes.func.isRequired,
	editContact: PropTypes.func.isRequired
};


export default ContactForm;
