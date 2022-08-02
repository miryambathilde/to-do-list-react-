/**
* Ejemplo de uso de:
* - useState()
* - useRef(): referencia elementos dentro de la vista
* - useEffect(): controla los cambios en la vista
*/

import React, { useState, useRef, useEffect } from 'react';

const UseEffect = () => {

	// vamos a crear dos contadores distintos cada uno con un estado diferente
	const [ contador1, setContador1 ] = useState(0);
	const [ contador2, setContador2 ] = useState(0);

	// vamos a crear una referencia con useRef() para asociar una variable
	// con un elemento del DOM del componente (vista HTML) - equivale al document.getElementById...
	const miRef = useRef();

	function incrementar1 () {
		setContador1(contador1 + 1);
	}

	function incrementar2 () {
		setContador2(contador2 + 1);
	}

	/**
	* Trabajando con UseEffect
	*/

	/**
	* ? Caso 1: ejecutar SIEMPRE un snippet de código
		 * Cada vez que haya un cambio en el estado del componente
	* se ejecuta aquello que esté dentro del useEffect
	*/

	/* useEffect(() => {
		console.log("cambio en el estado del componente");
		console.log('Mostrando Referencia a elemento del DOM:');
		console.log(miRef);
	}); */

	/**
	* ? Caso 2: ejecutar sólo cuando cambie el contador1
	* Cada vez que haya un cambio en el contador 1, se ejecuta lo que haya dentro del useEffect
	* En caso de que el cambio sea en el cambiador 2, no se ejecutará
	*/

	/* useEffect(() => {
		console.log("CAMBIO EN EL ESTADO DEL CONTADOR 1");
		console.log('Mostrando Referencia a elemento del DOM:');
		console.log(miRef);
	}, [ contador1 ]);
 */
	/**
	* ? Caso 3: ejecutar sólo cuando cambie el contador1 O contador2
	* Cada vez que haya un cambio en el contador 1, se ejecuta lo que haya dentro del useEffect
	* Cada vez que haya un cambio en el contador 2, se ejecuta lo que haya dentro del useEffect
	*/

	useEffect(() => {
		console.log("CAMBIO EN EL ESTADO DEL CONTADOR 1 / CONTADOR 2");
		console.log('Mostrando Referencia a elemento del DOM:');
		console.log(miRef);
	}, [ contador1, contador2 ]);

	return (
		<div>
			<h1>*** Ejemplo de useState(), useRef() y useEffect() ***</h1>
			<h2>CONTADOR 1: { contador1 }</h2>
			<h2>CONTADOR 2: { contador2 }</h2>
			{/* Elemento referenciado */ }
			<h4 ref={ miRef }>
				Ejemplo de elemento referenciado
			</h4>
			{/* botones para cambiar los contadores */ }
			<button onClick={ incrementar1 }>Incrementar contador 1</button>
			<button onClick={ incrementar2 }>Incrementar contador 2</button>
		</div>
	);
};

export default UseEffect;
