/**
* Ejemplo de uso del método componentWillUnMount de ciclo de vida en componente clase y el hook de
* ciclo de vida en componente funcional
*/

import React, { Component } from 'react';

export class WillUnMount extends Component {

	componentWillUnmount () {
		console.log('Comportamoento antes de que el componente desaparezca');
	}

	render () {
		return (
			<div>
				<h1>WillUnMount</h1>
			</div>
		);
	}
}


export const WillUnMountHook = () => {

	useEffect(() => {
		// Aquí no ponemos nada
		return () => {
			console.log('Comportamientoi antes de que el componente desaparezca');
		};
	}, []);

	return (
		<div>
			<h1>WillUnMount</h1>
		</div>
	);
};
