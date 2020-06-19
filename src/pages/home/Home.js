import React from 'react';
import { Link } from 'react-router-dom';

import './style.css';

export default function Home(){
    return (
        <>
            <div className="page">
                <div className="name">
                    <h1>Annotations</h1>
                </div>
                <div className="info-page">
                    <h2>Annotations,</h2>
                    <p>um site para você criar suas anotações e <br/>consulta-las quando quiser</p>
                    <Link to="/criar">Criar Nova Anotação</Link>
                    <Link to="/all">Ir Para Anotações</Link>
                </div>
            </div>
        </>
    );
};