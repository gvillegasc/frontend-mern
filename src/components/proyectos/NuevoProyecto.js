import React, { Fragment, useState, useContext } from 'react';
import proyectoContext from '../../context/proyectos/proyectoContext';

const NuevoProyecto = () => {
	// Obtener el state del formulario
	const proyectosContext = useContext(proyectoContext);
	const { formulario, mostrarFormulario } = proyectosContext;

	// State para proyecto
	const [proyecto, guardarProyecto] = useState({
		nombre: '',
	});

	// Extraer nombre de poryceto
	const { nombre } = proyecto;

	// Lee los contenidos del input
	const onChangeProyecto = (e) => {
		guardarProyecto({
			...proyecto,
			[e.target.name]: e.target.value,
		});
	};

	// Cunado el usuaroo enviar un proyecto
	const onSubmitProyecto = (e) => {
		e.preventDefault();

		// Validar el proyecto

		// agregar al state

		// Reiniciar el form
	};

	// Mostrar el formulario
	const onClickFormulario = () => {
		mostrarFormulario();
	};

	return (
		<Fragment>
			<button
				type="button"
				className=" btn btn-block btn-primario"
				onClick={onClickFormulario}
			>
				Nuevo Proyecto
			</button>

			{formulario ? (
				<form className="formulario-nuevo-proyecto" onSubmit={onSubmitProyecto}>
					<input
						type="text"
						className="input-text"
						placeholder="Nombre Proyecto"
						name="nombre"
						value={nombre}
						onChange={onChangeProyecto}
					></input>

					<input
						type="submit"
						className="btn btn-primario btn-block"
						value="Agregar Proyecto"
					></input>
				</form>
			) : null}
		</Fragment>
	);
};

export default NuevoProyecto;
