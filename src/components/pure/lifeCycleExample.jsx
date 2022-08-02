/**
* Ejemplo de componente de tipo clase que dispone de los
* métodos de ciclo de vida
* rcfc
*/


import React, { Component } from 'react';
import PropTypes from 'prop-types';

class lifeCycleExample extends Component {
	constructor (props) {
		super(props);
		console.log('CONSTRUCTOR: Cuando se instancia el componente');

	}

	componentWillMount () {
		console.log('WILL MOUNT: Antes del montaje del componente');
	}

	componentDidMount () {
		console.log('DID MOUNT: Justo al acabar el montaje del componente, antes de renderizarlo');
	}

	componentWillReceiveProps (nextProps) {
		console.log('WILL RECEIVE PROPS: Si va a recibir nuevas props');
	}

	shouldComponentUpdate (nextProps, nextState) {
		// Controla si el componente debe o no actualizarse y devuelve siempre true o false
		// return true / false
		console.log('SHOULD COMPONENT UPDATE: Controla si hay cambios para actualizarse');
	}

	componentWillUpdate (nextProps, nextState) {
		console.log('WILL UPDATE: Justo antes de actualizarse');
	}

	componentDidUpdate (prevProps, prevState) {
		console.log('DID UPDATE: Justo después de actualizarse');
	}

	componentWillUnmount () {
		console.log('WILL UNMOUNT: Justo antes de desaparecer');
	}

	render () {
		return (
			<div>

			</div>
		);
	}
}

lifeCycleExample.propTypes = {

};

export default lifeCycleExample;