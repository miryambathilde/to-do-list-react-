/**
* Ejemplo de uso del método DidMount de ciclo de vida en componente clase y el hook de
* ciclo de vida en componente funcional
*/

import React, { Component, useEffect } from 'react';
import { DidMount } from './DidMount';

export class DidMount extends Component {

	componentDidMount () {
		console.log('Comportamiento antes de que el componente sea añadido al DOM (renderice)');
	}

	render () {
		return (
			<div>
				<h1>DidMount</h1>
			</div>
		);
	}
}


export const DidMountHook = () => {

	// Los corchetes indican que se renderizan SÓLO UNA vez, si no dejamos los corchetes, se ejecutaría todas las veces
	useEffect(() => {
		console.log('Comportamiento antes de que el componente sea añadido al DOM (renderice)');
	}, []);

	return (
		<div>
			<h1>DidMount</h1>
		</div>
	);
};


