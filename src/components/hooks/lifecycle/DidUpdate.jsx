/**
* Ejemplo de uso del método componentDidUpdate de ciclo de vida en componente clase y el hook de
* ciclo de vida en componente funcional
*/

import React, { Component } from 'react';

export class DidUpdate extends Component {

	componentDidUpdate () {
		console.log('Comportamiento cuando el componente recibe nuevos props o cambios en su estado privado');
	}

	render () {
		return (
			<div>
				<h1>DidUpdate</h1>
			</div>
		);
	}
}


export const DidUpdateHook = () => {

	// En este caso se ejecturá sin límite por eso le hemos quitado los corchetes
	useEffect(() => {
		console.log('Comportamiento cuando el componente recibe nuevos props o cambios en su estado privado');
	});

	return (
		<div>
			<h1>DidUpdate</h1>
		</div>
	);
};

