import React, {useState} from 'react';
import { Link } from 'react-router-dom';

import Header from '../../components/Header/Header.js'
import Footer from '../../components/Footer/Footer.js'

import './criar.css';

import api from '../../api.js'

export default function Novo(){

    const [title, setTitle] = useState([])
    const [content, setContent] = useState([])

    function changeTitle(event){
        var value = event.target.value
        setTitle(value)
    }
    function changeContent(event){
        var value = event.target.value
        setContent(value)
    }    

    function submit()  {
        api.post("/create", {title, content})

    }

    return (
        <>
            <div className="page-input">
                <Header />
                <div className="container"> 
                    <form>
                        <label>Criar nova anotação</label>
                        <input type="text" className="title" value={title} onChange={changeTitle} placeholder="DIGITE UM TITULO PARA SUA ANOTAÇÃO" />
                        <textarea type="text" className="coment" value={content} onChange={changeContent} placeholder="COMENTÁRIO..." />
                        <Link to="/all" type="submit" onClick={submit} className="btn btn-outline-light">Enviar</Link>
                    </form>
                </div>
                <Footer />
            </div>
            
        </>
    );
};