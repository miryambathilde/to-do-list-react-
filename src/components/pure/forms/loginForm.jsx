/**
* Componente que va a contener el formulario para 
* autenticación de usuarios
*/

import React, { useEffect, useState } from 'react';

const LoginForm = () => {

	const initialCredentials = [
		{
			user: '',
			password: '',
		}
	];

	const [ credentials, setCredentials ] = useState(initialCredentials);

	return (
		<div>

		</div>
	);
};

export default LoginForm;
