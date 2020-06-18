import React from 'react';

import Header from '../../components/Header/Header.js'
import Footer from '../../components/Footer/Footer.js'

import './criar.css';

export default function Novo(){
    return (
        <>
            <div className="page-input">
                <Header />

                <div className="container">
                    <form action="#">
                        <label>Criar nova anotação</label>

                        <input type="text" className="title" placeholder="  DIGITE UM TITULO PARA SUA ANOTAÇÃO" />
                        <textarea type="text" className="coment" placeholder="COMENTÁRIO..." />
                        <buttom type="submit" class="btn btn-outline-light">Enviar</buttom>

                    </form>
                </div>
                <Footer />
            </div>
            
        </>
    );
};