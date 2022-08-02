import React from 'react';
import PropTypes from 'prop-types';
import { Contact } from './../../models/contact.class';


const StatusUser = ({ contact }) => {
	return (
		<div>
			<p>
				Nombre: { contact.name } { contact.lastName }
			</p>
			<p>
				Email: { contact.email }
			</p>
			<p>
				Estado del usuario: { contact.connected ? "contacto en línea" : "contacto no disponible" }
			</p>
		</div>
	);
};


StatusUser.propTypes = {
	contact: PropTypes.instanceOf(Contact)
};


export default StatusUser;
