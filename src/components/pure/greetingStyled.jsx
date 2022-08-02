import React, { useState } from 'react';

// Definiendo estilos en constantes

// ? Estilo para usuario logeado
const loggedStyle = {
	color: 'lightblue'
};

// ? Estilo para usuario no logeado
const unloggedStyle = {
	color: 'tomato',
	fontWeight: 'bold',
};

const GreetingStyled = (props) => {

	// UseState: Generamos un estado para el componente
	// y así controlar si el usuario está o no logueado
	const [ logged, setLogged ] = useState(false);

	const greetingUser = (<p>Hola, { props.name }</p>);
	const loginMessage = (<p>Por favor, inicia sesión</p>);

	return (
		<div style={ logged ? loggedStyle : unloggedStyle }>
			{ logged ? greetingUser : loginMessage }
			{/* <p>Hola, { props.name }</p> */ }
			{/* pasamos una función anomina dentro del boton */ }
			<button onClick={ () => {
				console.log('Botón pulsado');
				setLogged(!logged);
			} }>
				{ logged ? 'Cerrar sesión' : 'Iniciar sesión' }
			</button>
		</div>
	);
};


export default GreetingStyled;
