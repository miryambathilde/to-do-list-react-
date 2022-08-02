/**
* Ejemplo para entender el uso de props.children
para pasar elementos HTML
*/

import React from 'react';

const Ejemplo = (props) => {
	return (
		<div>
			<h1>*** Ejemplo de CHILDREN PROPS ***</h1>
			<h2>
				Nombre: { props.nombre }
			</h2>
			{/* props.children pintará por defecto aquello que se encuentre entre las etiquetas
			de apertura y cierre de este componente desde el componente padre o de orden superior */}
			{ props.children }
		</div>
	);
};

export default Ejemplo;
