/**
* Ejemplo HOOKS: 
* - useState()
* - useContext() - poder usar el contexto y pasarlo a componentes inferiores
*/

import React, { useState, useContext } from 'react';

/**
 * Dispone de un contexto que va a tener un valor
 * que recibe desde el padre
 * @returns Componente1

 */

// Inicializamos un estado vacío que va a rellenarse con los datos del padre
const miContexto = React.createContext(null);


const Componente1 = () => {

	const state = useContext(miContexto);

	return (
		<div>
			<h1>
				El token es: { state.token }
			</h1>
			{/* Pintamos el componente 2 */ }
			<Componente2></Componente2>
		</div>
	);
};

const Componente2 = () => {

	const state = useContext(miContexto);

	return (
		<div>
			<h2>
				La sesión es: { state.session }
			</h2>
		</div>
	);

};


export default function MiComponenteConContexto () {

	// estado inicial
	const estadoInicial = {
		token: '1234567',
		session: 1
	};

	// Creamos el estado de nuestro componente
	const [ sessionData, setSessionData ] = useState(estadoInicial);

	// funcion para añadir unos nuevos valores y actualizar el estado inicial 
	function actualizarSesion () {
		setSessionData({
			token: 'JWT1235487',
			session: sessionData.session + 1
		});
	}

	return (
		/* AHORA PROPORCIONAMOS UN CONTEXTO */
		/* estamos inyectando (con Provider) miContexto a los componentes que renderizamos aquí */
		<miContexto.Provider value={ sessionData }>
			{/* Todo LO QUE ESTA AQUÍ DENTRO puede leer los datos de SessionData */ }
			{/* Además si se actualiza, los componentes de aquí, también lo actualizan */ }
			<h1>*** Ejemplo de useState() y useContext()</h1>
			<h1>Ejemplo de componente con contexto:</h1>
			<Componente1></Componente1>
			<button onClick={ actualizarSesion }>Actualizar sesión</button>
		</miContexto.Provider>
	);
}
