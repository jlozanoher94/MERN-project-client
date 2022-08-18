import React, { Fragment, useContext, useState } from 'react';
import proyectoContext from '../../context/proyectos/proyectoContext';

const NuevoProyecto = () => {

    // obtener el state del formulario
    const proyectosContext = useContext(proyectoContext);
    const { formulario, errorformulario, mostrarFormulario, agregarProyecto, mostrarError } = proyectosContext;

    // State para Proyecto
    const [proyecto, guardarProyecto] = useState({
        nombre: ''
    });

    //extraer nombre del proyecto
    const {nombre} = proyecto;

    //Lee los contenidos del input
    const onChangeProyecto = e => {
        guardarProyecto({
            ...proyecto,
            [e.target.name]:e.target.value
        })
    };

    //cuando el usuario envia un proyecto
    const onSubmitProyecto = e => {
        e.preventDefault();

        //Validar el proyecto
        if(nombre === ''){
            mostrarError();
            return;
        }

        // agregar el state
        agregarProyecto(proyecto)

        // reiniciar el form
        guardarProyecto({
            nombre: ''
        })
    }

    return ( 
        <Fragment>
            <button
                type='button'
                className='btn btn-primario btn-block'
                onClick={() => mostrarFormulario()}
            >Nuevo Proyecto</button>

            {
                formulario?
                    (
                        <form
                            className='formulario-nuevo-proyecto'
                            onSubmit={onSubmitProyecto}
                        >
                            <input
                                type='text'
                                className='input-text'
                                placeholder='Nombre Proyecto'
                                name='nombre'
                                value={nombre}
                                onChange={onChangeProyecto}
                            />

                            <input
                                type='submit'
                                className='btn btn-primario btn-block'
                                value='Agregar proyecto'
                            />
                        </form>
                    )
            : null }

        { errorformulario ? <p className='mensaje error'>El nombre del Proyecto es obligatorio</p> : null }
        </Fragment>
     );
}
 
export default NuevoProyecto;