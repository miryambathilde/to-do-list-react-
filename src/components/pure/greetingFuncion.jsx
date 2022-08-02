// Los componentes de funciñon son los componentes que más se usan actualmente
// rcfp: react function props
import React, { useState } from 'react';
import PropTypes from 'prop-types';


/**
 * 
 * @param {*} props
 * @returns 
 */
const GreetingFuncion = (props) => {

	/**
	 * UseState es hook que nos permite crear un estado
		const [variable, metodo para actualizar el estado] = useState(valor inicial);
	 */
	const [ age, setage ] = useState(40);

	const birthday = () => {
		// actualizamos el State
		setage(age + 1);
	};

	return (
		<div>
			<h1>¡Hola { props.name } desde componente funcional!</h1>
			<h2>Tienes { age } años</h2>
			<div>
				<button onClick={ birthday }>Cumplir años</button>
			</div>
		</div>
	);
};


GreetingFuncion.propTypes = {
	name: PropTypes.string,
};


export default GreetingFuncion;
