import React, { useContext } from 'react';
import proyectoContext from '../../context/proyectos/proyectoContext';

const FormTarea = () => {
	// Extraer si un proyectoe sta activo
	const proyectosContext = useContext(proyectoContext);
	const { proyecto } = proyectosContext;

	// Si no hay proyecto seleccionado
	if (!proyecto) return null;

	// Arrary destructurinf para extraer el proyecto actual
	const [proyectoActual] = proyecto;

	return (
		<div className="formulario">
			<form>
				<div className="contenedor-input">
					<input
						type="text"
						className="input-text"
						placeholder="Nombre Tarea..."
						name="nombre"
					></input>
				</div>

				<div className="contenedor-input">
					<input
						type="submit"
						className="btn btn-primario btn-submit btn-block"
						value="Agregar Tarea"
					></input>
				</div>
			</form>
		</div>
	);
};
export default FormTarea;
