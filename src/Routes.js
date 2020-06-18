import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';

import Home from './pages/home/Home.js'
import Criar from './pages/novo/Criar.js'

export default function Routes(){
    return(
        <BrowserRouter>
            <Route path="/" exact component={Home} />
            <Route path="/criar" component={Criar} />
        </BrowserRouter>
    )
}