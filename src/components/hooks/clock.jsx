import React, { useState, useEffect } from 'react';

const Clock = () => {

	const [ user, setUser ] = useState({
		fecha: new Date(),
		edad: 0,
		nombre: "Miryam",
		apellidos: "Bathilde"
	});

	useEffect(() => {

		const timerId = setInterval(() => {
			tick();
		}, 1000);

		return () => {
			clearInterval(timerId);
		};

	}, []);

	const tick = () => {
		setUser((user) => {

			let edad = user.edad + 1;
			return {
				...user,
				fecha: new Date(),
				edad
			};

		});
	};


	return (
		<div>
			<h2>Hora Actual:{ user.fecha.toLocaleTimeString() }</h2>
			<h3>{ user.nombre } { user.apellidos }</h3>
			<h1>Edad: { user.edad }</h1>
		</div>
	);

};

export default Clock;