/**
Ejemplo de uso del Hook useState

Crear un componente de tipo función y acceder a su estado privado
a través de un hook y, además, poder modificarlo
*/

// siempre hay que importar los hooks que usemos
import React, { useState } from 'react';

const UseState = () => {

	// valor inicial para un contador
	const valorInicial = 0;

	// valor inicial para una persona
	const valorInicialPersona = {
		nombre: 'Miryam',
		email: 'correo@gmail.com',
	};

	/**
	 * Queremos que el valorInicial y valorInicialPersona sean parte
	del estado del componente para así poder gestionar su cambio
	y que éste se vea reflejado en la vista del componente 

	const [nombreVariable, funciionParaCambiar] = useState(valorInicial)
	*/

	const [ contador, setContador ] = useState(valorInicial);
	const [ persona, setPersona ] = useState(valorInicialPersona);

	/**
	 * Función para actualizar el estado privado que contiene el contador
	 */
	function incrementarContador () {
		// funciónParaCambiar(nuevoValor)
		setContador(contador + 1);
	}

	/**
	 * Función para actualizar el estado de persona en el componente
	 * @param {string} nombre 
	 */

	function actualizarPersona (nombre) {
		setPersona(
			{
				nombre: 'Sergio',
				email: 'sergio@mail.com',
			}
		);
	}

	return (
		<div>
			<h1>*** Ejemplo de UseState() ***</h1>
			<h2>CONTADOR: { contador }</h2>
			<h2>DATOS DE LA PERSONA:</h2>
			<h3>Nombre: { persona.nombre }</h3>
			<h4>Email: { persona.email }</h4>
			{/* bloque de botones para actualizar el estado de persona en el componente */ }
			<button onClick={ incrementarContador }>Incrementar contador</button>
			<button onClick={ actualizarPersona }>Actualizar persona</button>
		</div>
	);
};

export default UseState;
