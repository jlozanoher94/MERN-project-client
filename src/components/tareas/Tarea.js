import React, { useContext } from 'react';
import proyectoContext from '../../context/proyectos/proyectoContext';
import TareaContext from '../../context/tareas/TareaContext';

const Tarea = ({tarea}) => {

    // Extraer si un proyecto esta activo
    const proyectosContext = useContext(proyectoContext);
    const { proyecto } = proyectosContext;

    // obtener la funcion del context de tarea
    const tareasContext = useContext(TareaContext);
    const { eliminarTarea, obtenerTareas, guardarTareaActual, actualizarTarea } = tareasContext;

    //extraer el proyecto
    const [proyectoActual] = proyecto;

    //Funcion q se ejecuta cuando el usuario presiona el btn de eliminar tarea
    const tareaEliminar = id => {
        eliminarTarea(id, proyectoActual._id);
        obtenerTareas(proyectoActual._id)
    }

    // funcion que modifica el estado de las tareas
    const estadoTareas = tarea => {
        if(tarea.estado) {
            tarea.estado = false;
        } else {
            tarea.estado = true;
        }
        actualizarTarea(tarea);
    }

    // agreaga una tarea actual cuando el usuario desee editarla
    const seleccionarTarea = tarea => {
        guardarTareaActual(tarea);
    }

    return ( 
        <li className='tarea sombra'>
            <p>{tarea.nombre}</p>

            <div className='estado'>
                {tarea.estado
                ?
                    (
                        <button
                            type='button'
                            className='completo'
                            onClick={() => estadoTareas(tarea)}

                        >Completo</button>
                    )
                :
                    (
                        <button
                            type='button'
                            className='incompleto'
                            onClick={() => estadoTareas(tarea)}
                        >Incompleto</button>
                    ) 
                }
            </div>

            <div className='acciones'>
                <button
                    type='button'
                    className='btn btn-primario'
                    onClick={() => seleccionarTarea(tarea)}
                >Editar</button>

                <button
                    type='button'
                    className='btn btn-secundario'
                    onClick={() => tareaEliminar(tarea._id)}
                >Eliminar</button>
            </div>
        </li>
     );
}
 
export default Tarea;