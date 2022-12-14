import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Login from './components/auth/Login';
import NuevaCuenta from './components/auth/NuevaCuenta';
import Proyectos from './components/proyectos/Proyectos';

import ProyectoState from './context/proyectos/proyectoState';
import TareaState from './context/tareas/TareaState';
import AlertaState from './context/alertas/alertaState';
import AuthState from './context/autenticacion/authState';
import authToken from './config/tokenAuth';
import RutaPrivada from './components/rutas/RutaPrivada';

// Revisar si tenemos un token
const token = localStorage.getItem('token');
if(token){
    authToken(token);
}

function App() {
    return (
        <ProyectoState>
            <TareaState>
                <AlertaState>
                    <AuthState>
                        <Router>
                            <Routes>
                                <Route path="/" caseSensitive={false} element={<Login/>} />
                                <Route path="/nueva-cuenta" caseSensitive={false} element={<NuevaCuenta/>} />
                                <Route path="/proyectos" element={
                                    <RutaPrivada component={Proyectos}>
                                        <Proyectos/>
                                    </RutaPrivada>} 
                                />
                            </Routes>
                        </Router>
                    </AuthState>
                </AlertaState>
            </TareaState>
        </ProyectoState>
    );
}

export default App;
