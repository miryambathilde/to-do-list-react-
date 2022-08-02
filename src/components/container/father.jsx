import React, { useState } from 'react';
import Child from "../pure/child";

const Father = () => {

	const [ name, setName ] = useState('Miryam');

	function showMessage (text) {
		alert(`Message received: ${ text }`);
	}

	function updateName (newName) {
		setName(newName);
	}

	return (
		<div style={ { background: 'tomato', padding: '10px' } }>
			{/* aquí le pasamos las props del hijo */ }
			<Child name={ name } send={ showMessage } update={ updateName }></Child>
		</div>
	);
};

export default Father;
