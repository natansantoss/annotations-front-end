import React from "react";
import {  Link  } from 'react-router-dom'

import './style.css';

export default function Header(){
    return( 
        <>
            <div>
                <ul>
                    <li><Link to="/" >Home</Link></li>
                    <li><Link to="/criar" >Criar</Link></li>
                    <li><Link to="/all">Anotações</Link></li>
                </ul>
            </div>
        </>
    )
}