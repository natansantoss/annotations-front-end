import React from 'react'

import Header from '../../components/Header/Header.js'
import Footer from '../../components/Footer/Footer.js'
import Anotation from '../../components/Anotation/Anotation.js'

import './style.css';

export default function All(){
    return (
        <>
            <div className="page-all">
                <Header />

                <div className="container"> 
                    <Anotation />
                </div>
                <Footer />
            </div>
            
        </>
    );
};