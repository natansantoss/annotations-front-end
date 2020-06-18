import React from "react";
import {  Link  } from 'react-router-dom'

import './style.css';

export default function Header(){
    return( 
        <>
            <div>
                <ul>
                    <li><Link to="/">Home</Link></li>
                    <li><Link to="/">Anotações</Link></li>
                </ul>
            </div>
        </>
    )
}