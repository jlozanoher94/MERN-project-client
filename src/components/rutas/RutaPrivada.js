import React, { useContext, useEffect } from 'react';
import { Navigate } from 'react-router-dom';
import AuthContext from '../../context/autenticacion/authContext';

const RutaPrivada = ({ component: Component, ...props}) => {

    const authContext = useContext(AuthContext);
    const { autenticado, cargando, usuarioAutenticado } = authContext;

    useEffect(() => {
        usuarioAutenticado();
    // eslint-disable-next-line react-hooks/exhaustive-deps
    },[]);

    if(!autenticado && !cargando){
        return <Navigate to="/" replace />
    }

    return <Component {...props} />
    
}
 
export default RutaPrivada;