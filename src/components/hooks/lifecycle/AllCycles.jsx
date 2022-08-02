/**
* Componente funcional con todos los ciclos de vida
*/

import React, { useEffect } from 'react';

const AllCycles = () => {

	useEffect(() => {
		console.log('Componente creado');

		// se ejecuta cada segundo
		const intervalId = setInterval(() => {
			document.title = `${ new Date() }`;
			console.log('actualización del componente');
		}, 1000);

		console.log('Componente actualizado');
		return () => {
			console.log('Componente va a desaparecer');
			document.title = 'Tiempo detenido';
			clearInterval(intervalId);
		};
	}, []);

	return (
		<div>

		</div>
	);
};

export default AllCycles;
