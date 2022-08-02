// Component class type: PureComponent: rcc o rccp si queremos usar las props 
import React, { Component } from 'react';
import PropTypes from 'prop-types';


class Greeting extends Component {

	constructor (props) {
		/* Las props es la información que yo le paso al componente con atributos */
		super(props);
		/* this.state es un dato totalmente privado, es información que tiene el componente que puede modificarse y que cuando se modifique actualiza la vista de este componente */
		/* el state es privado e inmutable, por lo que para cambiar el valor del state en la vista se hace a través de la función set state en los componentes de tipo clase */
		this.state = {
			age: 40
		};
	}

	render () {
		return (
			<div>
				{/* aquí le pasamos las props y el state  */ }
				<h1>Hola { this.props.name }!</h1>
				<h2>Tienes { this.state.age } años</h2>
				<div>
					<button onClick={ this.birthday }>Cumplir años</button>
				</div>
			</div>
		);
	}
	/**
	 * Aquí creamos nuestra función birthday
	 * setState: nos permite generar un nuevo estado y actualizar la vista
	 * @param {*} prevState: estado anterior
	 */
	birthday = () => {
		this.setState((prevState) => {
			return {
				age: prevState.age + 1
			};
		});
	};
}

/* Auí indicamos el tipo de dato que es cada prop */
Greeting.propTypes = {
	name: PropTypes.string
};


export default Greeting;
