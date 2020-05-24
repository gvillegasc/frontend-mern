import React, { useReducer } from 'react';

import { v4 as uuidv4 } from 'uuid';
import proyectoContext from './proyectoContext';
import proyectoReducer from './proyectoReducer';
import {
	FORMULARIO_PROYECTO,
	OBTENER_PROYECTO,
	AGREGAR_PROYECTO,
	VALIDAR_FORMULARIO,
	PROYECTO_ACTUAL,
} from '../../types';

const ProyectoState = (props) => {
	const proyectos = [
		{ id: 1, nombre: 'Tienda Virtual' },
		{ id: 2, nombre: 'Intranet' },
		{ id: 3, nombre: 'Diseño de Sitio Web' },
		{ id: 4, nombre: 'MERN' },
	];

	const initialState = {
		proyectos: [],
		formulario: false,
		errorformulario: false,
		proyecto: null,
	};

	// Dispath para ejecutar las acciones
	const [state, dispatch] = useReducer(proyectoReducer, initialState);

	// Serie de funciones para el CRUD
	const mostrarFormulario = () => {
		dispatch({
			type: FORMULARIO_PROYECTO,
		});
	};
	// Obtener los proyectos
	const obtenerProyectos = () => {
		dispatch({
			type: OBTENER_PROYECTO,
			payload: proyectos,
		});
	};

	// Agregar nuevo proyecto
	const agregarProyecto = (proyecto) => {
		proyecto.id = uuidv4();

		// Insertar el proyecto en el state
		dispatch({
			type: AGREGAR_PROYECTO,
			payload: proyecto,
		});
	};

	// Valida el formulario
	const mostrarError = () => {
		dispatch({
			type: VALIDAR_FORMULARIO,
		});
	};

	// Selecciona el Proyecto que el usuario dio click
	const proyectoActual = (proyectoId) => {
		dispatch({
			type: PROYECTO_ACTUAL,
			payload: proyectoId,
		});
	};

	// Serie de funciones para el CRUD
	return (
		<proyectoContext.Provider
			value={{
				proyectos: state.proyectos,
				formulario: state.formulario,
				errorformulario: state.errorformulario,
				proyecto: state.proyecto,
				mostrarFormulario,
				obtenerProyectos,
				agregarProyecto,
				mostrarError,
				proyectoActual,
			}}
		>
			{props.children}
		</proyectoContext.Provider>
	);
};

export default ProyectoState;
