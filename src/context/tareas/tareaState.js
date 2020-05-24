import React, { useReducer } from 'react';
import TareaContext from './tareaContext';
import TareaReducer from './tareaReducer';

const TareaState = (props) => {
	const initalState = {
		tareas: [
			{
				nombre: 'Elegir Plataforma',
				estado: true,
				proyectoId: 1,
			},
			{
				nombre: 'Elegir Colores',
				estado: false,
				proyectoId: 2,
			},
			{
				nombre: 'Elegir Plataforma de pago',
				estado: false,
				proyectoId: 3,
			},
			{
				nombre: 'Elegir Hosting',
				estado: true,
				proyectoId: 4,
			},
			{
				nombre: 'Elegir Plataforma',
				estado: true,
				proyectoId: 1,
			},
			{
				nombre: 'Elegir Colores',
				estado: false,
				proyectoId: 2,
			},
			{
				nombre: 'Elegir Plataforma de pago',
				estado: false,
				proyectoId: 3,
			},
			{
				nombre: 'Elegir Plataforma de pago',
				estado: false,
				proyectoId: 4,
			},
			{
				nombre: 'Elegir Plataforma',
				estado: true,
				proyectoId: 1,
			},
			{
				nombre: 'Elegir Colores',
				estado: false,
				proyectoId: 2,
			},
			{
				nombre: 'Elegir Plataforma de pago',
				estado: false,
				proyectoId: 3,
			},
			{
				nombre: 'Elegir Plataforma de pago',
				estado: false,
				proyectoId: 4,
			},
		],
	};

	// Crear dispatch y state
	const [state, dispatch] = useReducer(TareaReducer, initalState);

	return (
		<TareaContext.Provider value={{ tareas: state.tareas }}>
			{props.children}
		</TareaContext.Provider>
	);
};

export default TareaState;
